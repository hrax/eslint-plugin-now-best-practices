/**
 * @fileoverview Disallow use of gs.log calls
 * @author Gregor "hrax" Magdolen
 */
"use strict";

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow use of gs.log calls",
      category: "Strict Mode"
    },
    schema: []
  },
  create: function(context) {
    function reportGsLogCall(node) {
      context.report({
        node: node,
        message: "Avoid using calls to gs.log; consider replacement in favor of GSLog."
      });
    }

    return {
      "CallExpression[callee.object.name='gs'][callee.property.name='log']": reportGsLogCall
    };
  }
};