const XLSX = require("xlsx");
const { connectRedis } = require('./redis');
const { processBatch } = require('./textProcessor');
const ASTProcessor = require('./astProcessor');



(async () => {
  try {
    // await connectRedis();

    const astProcessor = new ASTProcessor();
    const strings = astProcessor.parseFile("./a.js");

    console.log('Found node types:', astProcessor.getSeenTypes());
    await processBatch(strings);

    // Clear the processor for potential reuse
    astProcessor.clear();
  } catch (error) {
    console.error('Error:', error);
  }
})();