/**
 * @fileoverview Enforce use of GlideRecord.addEncodedQuery calls without hardcoded literals
 * @author Gregor "hrax" Magdolen
 */
"use strict";

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Enforce use of GlideRecord.addEncodedQuery calls without hardcoded literals",
      category: "Strict Mode"
    },
    schema: []
  },
  create: function(context) {
    function checkAddEncodedQueryCall(node) {
      /*
       * FIXME: resolve BinaryExpression arguments for literals?
       * TODO: option to check only 1 level of depth
       */
      if (node.arguments[0].type !== "Literal") {
        return;
      }

      context.report({
        node: node,
        message: "Avoid using calls to GlideRecord.addEncodedQuery with hardcoded literals."
      });
    }

    return {
      "CallExpression[callee.property.name='addEncodedQuery'][arguments.length=1]": checkAddEncodedQueryCall
    };
  }
};
