/**
 * @fileoverview Disallow use of gs.print calls
 * @author Gregor "hrax" Magdolen
 */
"use strict";

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow use of gs.print calls",
      category: "Strict Mode"
    },
    schema: []
  },
  create: function(context) {
    function reportGlideSystemPrintCall(node) {
      context.report({
        node: node,
        message: "Avoid using calls to gs.print."
      });
    }

    return {
      "CallExpression[callee.object.name='gs'][callee.property.name='print']": reportGlideSystemPrintCall
    };
  }
};