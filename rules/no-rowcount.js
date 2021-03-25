/**
 * @fileoverview Disallow use of GlideRecord.getRowCount calls
 * @author Gregor "hrax" Magdolen
 */
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
    function reportGlideRecordRowCountCall(node) {
      context.report({
        node: node,
        message: "Avoid using calls to GlideRecord.getRowCount."
      });
    }

    return {
      "CallExpression[callee.property.name='getRowCount']": reportGlideRecordRowCountCall
    };
  }
};