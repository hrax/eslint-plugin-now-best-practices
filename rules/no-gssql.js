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
    function reportGlideSystemSQLCall(aNode) {
      context.report({
        node: aNode,
        message: "Avoid using calls to gs.sql."
      });
    }

    return {
      "CallExpression[callee.object.name='gs'][callee.property.name='sql']": reportGlideSystemSQLCall
    };
  }
};