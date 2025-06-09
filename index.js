const fs = require('fs');
const acorn = require('acorn');
const jsx = require('acorn-jsx');
const walk = require('acorn-walk');
const { extend } = require('acorn-jsx-walk');
const XLSX = require('xlsx');

extend(walk.base);

const file = fs.readFileSync('./a.js', 'utf8');
const fileName = './a.js';

const parser = acorn.Parser.extend(jsx());

const ast = parser.parse(file, {
  ecmaVersion: 2020,
  sourceType: 'module',
  locations: true
});

const strings = [];
const seenTypes = new Set();

walk.simple(ast, {
  Literal(node) {
    seenTypes.add('Literal');
    if (typeof node.value === 'string') {
      strings.push({
        text: node.value.trim(),
        file: fileName,
        line: node.loc.start.line,
        column: node.loc.start.column,
        type: 'Literal'
      });
    }
  },
  JSXText(node) {
    seenTypes.add('JSXText');
    const text = node.value.trim();
    if (text) {
      strings.push({
        text: text,
        file: fileName,
        line: node.loc.start.line,
        column: node.loc.start.column,
        type: 'JSXText'
      });
    }
  },
  JSXAttribute(node) {
    seenTypes.add('JSXAttribute');
    if (node.value && node.value.type === 'Literal' && typeof node.value.value === 'string') {
      strings.push({
        text: node.value.value.trim(),
        file: fileName,
        line: node.value.loc.start.line,
        column: node.value.loc.start.column,
        type: 'JSXAttribute'
      });
    }
  },
  TemplateLiteral(node) {
    seenTypes.add('TemplateLiteral');
    node.quasis.forEach(quasi => {
      if (quasi.value.cooked) {
        strings.push({
          text: quasi.value.cooked.trim(),
          file: fileName,
          line: quasi.loc.start.line,
          column: quasi.loc.start.column,
          type: 'TemplateLiteral'
        });
      }
    });
  },
  Property(node) {
    if (node.value.name && node.value.type === 'Literal') {

      strings.push({
        text: node.value.name,
        file: fileName,
        line: node.loc.start.line,
        column: node.loc.start.column,
        type: 'Property Values'
      });
    }

    // if (node.key.name && node.key.type === 'Identifier') {
    //   strings.push({
    //     text: node.key.name,
    //     file: fileName,
    //     line: node.loc.start.line,
    //     column: node.loc.start.column,
    //     type: 'Property Keys'
    //   });
    // }
  }
});
const processBatch = async (strings, batchSize = 100) => {
  const MAX_EXCEL_CELL_LENGTH = 32767;
  const rows = [];

  //split text into sentences
  const splitIntoSentences = (text) => {
    return text.split(/(?<=[.!?])\s+(?=[A-Z])|(?<=[.!?])\s*$|(?<=[.!?])\s*["']\s+(?=[A-Z])/g)
      .map(s => s.trim())
      .filter(s => s.length > 0); // Remove empty sentences
  };

  strings.forEach((item, i) => {
    const text = item.text;
    const sentences = splitIntoSentences(text);

    sentences.forEach((sentence, sentenceIndex) => {
      if (sentence.length <= MAX_EXCEL_CELL_LENGTH) {
        rows.push({
          id: `TEXT${i + 1}_S${sentenceIndex + 1}`,
          text: sentence,
          fileName: item.file,
          lineNumber: `${item.line}:${item.column}`,
          type: `${item.type} (Sentence ${sentenceIndex + 1})`
        });
      } else {
        let chunkIndex = 0;
        for (let j = 0; j < sentence.length; j += MAX_EXCEL_CELL_LENGTH) {
          const chunk = sentence.slice(j, j + MAX_EXCEL_CELL_LENGTH);
          rows.push({
            id: `TEXT${i + 1}_S${sentenceIndex + 1}_C${chunkIndex + 1}`,
            text: chunk,
            fileName: item.file,
            lineNumber: `${item.line}:${item.column}`,
            type: `${item.type} (Sentence ${sentenceIndex + 1}, Part ${chunkIndex + 1})`
          });
          chunkIndex++;
        }
      }
    });
  });

  for (let i = 0; i < rows.length; i += batchSize) {
    const chunk = rows.slice(i, i + batchSize);
    console.log(`Processing batch ${Math.floor(i / batchSize) + 1} with ${chunk.length} rows`);
    const worksheet = XLSX.utils.json_to_sheet(chunk);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Content");
    await XLSX.writeFile(workbook, `content_${Math.floor(i / batchSize) + 1}.xlsx`, { compression: true });
  }
};

processBatch(strings).catch(console.error);