const fs = require("fs");
const acorn = require("acorn");
const walk = require("acorn-walk");
const { extend } = require("acorn-jsx-walk");
const jsx = require("acorn-jsx");

extend(walk.base);

class ASTProcessor {
  constructor() {
    this.strings = [];
    this.seenTypes = new Set();
  }

  parseFile(filePath) {
    const file = fs.readFileSync(filePath, "utf8");
    const parser = acorn.Parser.extend(jsx());
    
    const ast = parser.parse(file, {
      ecmaVersion: 2020,
      sourceType: "module",
      locations: true,
    });

    this.processAST(ast, filePath);
    return this.strings;
  }

  processAST(ast, fileName) {
    walk.simple(ast, {
      Literal: (node) => {
        this.seenTypes.add("Literal");
        if (typeof node.value === "string") {
          this.strings.push({
            text: node.value.trim(),
            file: fileName,
            line: node.loc.start.line,
            column: node.loc.start.column,
            type: "Literal",
          });
        }
      },
      JSXText: (node) => {
        this.seenTypes.add("JSXText");
        const text = node.value.trim();
        if (text) {
          this.strings.push({
            text: text,
            file: fileName,
            line: node.loc.start.line,
            column: node.loc.start.column,
            type: "JSXText",
          });
        }
      },
      JSXAttribute: (node) => {
        this.seenTypes.add("JSXAttribute");
        if (
          node.value &&
          node.value.type === "Literal" &&
          typeof node.value.value === "string"
        ) {
          this.strings.push({
            text: node.value.value.trim(),
            file: fileName,
            line: node.value.loc.start.line,
            column: node.value.loc.start.column,
            type: "JSXAttribute",
          });
        }
      },
      TemplateLiteral: (node) => {
        this.seenTypes.add("TemplateLiteral");
        node.quasis.forEach((quasi) => {
          if (quasi.value.cooked) {
            this.strings.push({
              text: quasi.value.cooked,
              file: fileName,
              line: quasi.loc.start.line,
              column: quasi.loc.start.column,
              type: "TemplateLiteral",
            });
          }
        });
      },
      Property: (node) => {
        if (node.value.name && node.value.type === "Literal") {
          this.strings.push({
            text: node.value.name,
            file: fileName,
            line: node.loc.start.line,
            column: node.loc.start.column,
            type: "Property Values",
          });
        }
      },
    });
  }

  getSeenTypes() {
    return Array.from(this.seenTypes);
  }

  clear() {
    this.strings = [];
    this.seenTypes.clear();
  }
}

module.exports = ASTProcessor; 