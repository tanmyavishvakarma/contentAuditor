const crypto = require('crypto');
const { redisClient } = require('./redis');
const MAX_EXCEL_CELL_LENGTH = 32767;

/*
get strings from ast
de duplicate strings using map
push location for handling muliple occurences
send sentence to gpt
create excel
*/

const splitIntoSentences = (text) => {
    return text
        .split(/(?<=[.!?])\s+(?=[A-Z])|(?<=[.!?])\s*$|(?<=[.!?])\s*["']\s+(?=[A-Z])/g)
        .map((s) => s.trim())
        .filter((s) => s.length > 0); // Remove empty sentences
};

const genHashKey = (text) => {
    const hashKey = crypto.createHash('sha256').update(text).digest('hex');
    return hashKey;
};

const createStoreHash = (map, sentence, file, line, column) => {
    const hash = genHashKey(sentence)

    if (!map.has(hash)) {
        map.set(hash, {
            text,
            occurrences: []
        });
    }

    uniqueTexts.get(hash).occurrences.push({
        file,
        line,
        column,
    });
    return hash
}

const createSuggestions = async (senMap) => {
    const senArray = Array.from(senMap.values())
    const batchSize = 100

    const allRows = []

    for (let i = 0; i < senArray.length; i += batchSize) {
        const batch = senArray.slice(i, i + batchSize)

        const promises = batch.map(async (item) => {
            const suggestion = await getSuggestion(item) // chat gpt here
            return {
                ...item,
                suggestion
            }
        })

        const batchSuggestions = await Promise.all(promises)
        allRows.push(createExcelData(batchSuggestions))
    }
}

const createExcelData = (processedData) => {
    const rows = []
    processedData.forEach((data) => {
        data.forEach((occurrences) => {
            rows.push({
                ...occurrences,
                suggestion: data.suggestion
            })
        })
    })


}

const processBatch = async (strings, batchSize = 100) => {
    const senMap = new Map()
    strings.forEach((item, index) => {
        const sentences = splitIntoSentences(text);

        sentences.forEach((sentence, sentenceIndex) => {
            const senHash = createStoreHash(senMap, sentence, item.file, item.line, item.column)
        });

    })

    createSuggestions(senMap)
}


module.exports = { processBatch }