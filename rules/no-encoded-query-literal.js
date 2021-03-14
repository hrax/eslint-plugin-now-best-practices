"use strict";

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Require use of GlideRecord.addEncodedQuery calls with hardcoded literals",
      category: "Strict Mode"
    },
    schema: []
  },
  create: function(context) {
    function checkAddEncodedQueryCall(aNode) {
      // FIXME: Should we care about any incorrect argument calls?
      if (aNode.callee.type !== "MemberExpression" || aNode.callee.property.name !== "addEncodedQuery" || aNode.arguments.length !== 1 || aNode.arguments[0].type !== "Literal") {
        return;
      }

      context.report({
        node: aNode,
        message: "Avoid using calls to GlideRecord.addEncodedQuery with hardcoded literals."
      });
    }

    return {
      "CallExpression": checkAddEncodedQueryCall
    };
  }
};