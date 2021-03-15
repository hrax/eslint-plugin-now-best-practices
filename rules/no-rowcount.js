// Disallow use of getRowCount
"use strict";

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow use of GlideRecord.getRowCount calls",
      category: "Best Practices"
    },
    schema: []
  },
  create: function(context) {
    function checkRowCountCall(aNode) {
      if (aNode.callee.type !== "MemberExpression" || aNode.callee.property.type !== "Identifier" || aNode.callee.property.name !== "getRowCount") {
        return;
      }

      context.report({
        node: aNode,
        message: "Avoid using calls to GlideRecord.getRowCount."
      });
    }

    return {
      "CallExpression": checkRowCountCall
    };
  }
};