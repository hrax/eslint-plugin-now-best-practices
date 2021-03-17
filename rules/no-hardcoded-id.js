/**
 * @fileoverview Disallow hardcoded Sys ID in Literals
 * @author Gregor "hrax" Magdolen
 */
"use strict";

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow hardcoded Sys ID in Literals",
      category: "Best Practices"
    },
    schema: []
  },
  create: function(context) {
    const ID_PATTERN = /\b([0-9a-f]{32})\b/ig;

    function checkHardcodedId(aNode) {
      if (typeof aNode.value !== "string" || isInImportDeclaration(aNode)) {
        return;
      }

      // Check for the ID in the literal
      const matches = aNode.value.match(ID_PATTERN) || [];
      matches.forEach(function(match) {
        context.report({
          node: aNode,
          message: "Avoid using hardcoded Sys ID \"{{id}}\".",
          data: {
            "id": match
          }
        });
      });
    }

    // Inspired by eslint-plugin-spellcheck
    function isInImportDeclaration(aNode) {
      return aNode.parent && (
        (aNode.parent.type === "ImportDeclaration" || aNode.parent.type === "ExportNamedDeclaration") ||
        (aNode.parent.type === "CallExpression" && aNode.parent.callee.name === "require")
      );
    }

    return {
      "Literal": checkHardcodedId
    };
  }
};