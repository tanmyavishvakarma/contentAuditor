const XLSX = require("xlsx");
const { connectRedis } = require('./redis');
const TextProcessor = require('./textProcessor');
const FileProcessor = require('./fileProcessor');

const sentenceMap = new Map()

const startFixing = async (directoryPath) => {
  try {
    const fileProcessor = new FileProcessor();
    const textProcessor = new TextProcessor();

    const strings = await fileProcessor.processDirectory(directoryPath);
    await textProcessor.processBatch(strings, sentenceMap);
  } catch (error) {
    console.error('Error:', error);
  }
}

startFixing('./test/');