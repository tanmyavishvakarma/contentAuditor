const crypto = require('crypto');
const { getSuggestions } = require('./gptProcessor');

/*
get strings from ast
de duplicate strings using map
push location for handling muliple occurences
send sentence to gpt
create excel
*/

const splitIntoSentences = (sentences) => {
    return sentences
        .split(/(?<=[.!?])\s+(?=[A-Z])|(?<=[.!?])\s*$|(?<=[.!?])\s*["']\s+(?=[A-Z])/g)
        .map((s) => s.trim())
        .filter((s) => s.length > 0); // Remove empty sentences
};

const genHashKey = (sentence) => {
    const hashKey = crypto.createHash('sha256').update(sentence).digest('hex');
    return hashKey;
};

const createStoreHash = (map, hashData) => {
    const { sentence, file, line, column } = hashData
    const hash = genHashKey(sentence)

    if (!map.has(hash)) {
        map.set(hash, {
            sentence,
            occurrences: []
        });
    }

    map.get(hash).occurrences.push({
        file,
        line,
        column,
    });
    return hash
}

const createSuggestions = async (sentenceMap) => {
    const senArray = Array.from(sentenceMap.values());
    const batchSize = 100;
    const allRows = [];

    for (let i = 0; i < senArray.length; i += batchSize) {
        const batchSentences = senArray.slice(i, i + batchSize);

        const promises = batchSentences.map(async (sentenceObj) => {
            const suggestions = await getSuggestions(sentenceObj.sentence);
            const imporvedSentence = {
                ...sentenceObj,
                suggestions: suggestions.suggestions,
                reason: suggestions.reason

            };

            console.log({ imporvedSentence })
            return imporvedSentence
        });

        const batchSuggestions = await Promise.all(promises);
        allRows.push(createExcelData(batchSuggestions));
    }

    return allRows.flat();
};


const createExcelData = (updtedSentences) => {
    const rows = []
    updtedSentences.forEach((sentence) => {
        sentence.occurrences.forEach((occurrences) => {
            rows.push({
                ...occurrences,
                suggestion: sentence.suggestion
            })
        })
    })
}

const processBatch = async (strings, batchSize = 100) => {
    const sentenceMap = new Map()
    strings.forEach((item, index) => {
        const sentences = splitIntoSentences(item.text);
        sentences.forEach((sentence, sentenceIndex) => {
            const hashData = { sentence, file: item.file, line: item.line, column: item.column }
            const senHash = createStoreHash(sentenceMap, hashData)
        });

    })

    createSuggestions(sentenceMap)
}


module.exports = { processBatch, genHashKey }