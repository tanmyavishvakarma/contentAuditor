const crypto = require('crypto');
const XLSX = require('xlsx');
const { getSuggestions } = require('./gptProcessor');

/*
get strings from ast
de duplicate strings using map
push location for handling muliple occurences
send sentence to gpt
create excel
*/

const splitIntoSentences = (text) => {
    const cleanText = text
        // .replace(/^#+\s*.*$/gm, '') // Remove markdown headers
        // .replace(/\*\*/g, '') // Remove bold markdown
        .replace(/\n{2,}/g, ' ') // Replace multiple newlines with space
        .trim();

    return cleanText
        .replace(/(\s|^)(\d{1,2})\.\s/g, '|$2. ')
        .split(/\|/)
        .map(s => s.trim())
        .flatMap(s => {
            const sentences = s.split(/(?<=[.!?])\s+/);
            return sentences.map(sentence => sentence.trim())
                .filter(sentence => sentence.length > 0);
        });
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
    const batchSize = 50;
    let currentRows = [];
    let rowCount = 0;
    let fileIndex = 1;

    for (let i = 0; i < senArray.length; i += batchSize) {
        const batchSentences = senArray.slice(i, i + batchSize);

        const promises = batchSentences.map(async (sentenceObj) => {
            const suggestions = await getSuggestions(sentenceObj.sentence);
            // Add logging to debug the response
            console.log('GPT Response:', suggestions);
            return {
                ...sentenceObj,
                suggestions: suggestions.suggestions || [],
                reason: suggestions.reason || 'No reason provided'
            };
        });

        const batchSuggestions = await Promise.all(promises);

        for (const sentence of batchSuggestions) {
            for (const occurrence of sentence.occurrences) {
                const row = {
                    ...occurrence,
                    original_sentence: sentence.sentence,
                    suggestions: Array.isArray(sentence.suggestions) ? sentence.suggestions.join(' | ') : 'No suggestions available',
                    reason: sentence.reason
                };

                currentRows.push(row);
                rowCount++;

                // When we reach 100 rows, create a new Excel file
                if (rowCount === 100) {
                    const workbook = XLSX.utils.book_new();
                    const worksheet = XLSX.utils.json_to_sheet(currentRows);
                    XLSX.utils.book_append_sheet(workbook, worksheet, `Sheet1`);
                    XLSX.writeFile(workbook, `suggestions_${fileIndex}.xlsx`);

                    currentRows = [];
                    rowCount = 0;
                    fileIndex++;
                }
            }
        }
    }

    if (currentRows.length > 0) {
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(currentRows);
        XLSX.utils.book_append_sheet(workbook, worksheet, `Sheet1`);
        XLSX.writeFile(workbook, `suggestions_${fileIndex}.xlsx`);
    }
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


module.exports = { processBatch, genHashKey, splitIntoSentences }