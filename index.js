const fs = require('fs');
const acorn = require('acorn');
const jsx = require('acorn-jsx');
const walk = require('acorn-walk');
const { extend } = require('acorn-jsx-walk');

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

walk.simple(ast, {
  Literal(node) { // use JSXElement for jsx
    if (typeof node.value === 'string') {
      strings.push({
        text: node.value.trim(),
        file: fileName,
        line: node.loc.start.line,
        column: node.loc.start.column
      });
    }
  }
});

const ENGLISH = strings.reduce((acc, item, i) => {
  acc[`TEXT${i + 1}`] = {
    text: item.text,
    location: `${item.file}:${item.line}:${item.column}`
  };
  return acc;
}, {});

console.log(JSON.stringify(ENGLISH, null, 2));