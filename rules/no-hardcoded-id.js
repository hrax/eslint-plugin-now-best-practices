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

    function checkHardcodedId(node) {
      if (typeof node.value !== "string") {
        return;
      }

      // Check for the ID in the literal
      const matches = node.value.match(ID_PATTERN) || [];
      matches.forEach(function(match) {
        context.report({
          node: node,
          message: "Avoid using hardcoded Sys ID \"{{id}}\".",
          data: {
            "id": match
          }
        });
      });
    }

    return {
      "Literal": checkHardcodedId
    };
  }
};