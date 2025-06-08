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
    console.log({ node });
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


const ENGLISH = strings.reduce((acc, item, i) => {
  acc[`TEXT${i + 1}`] = {
    text: item.text,
    location: `${item.file}:${item.line}:${item.column}`,
    type: item.type
  };
  return acc;
}, {});

console.log(JSON.stringify(ENGLISH, null, 2));