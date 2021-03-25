/**
 * @fileoverview Disallow use of GlideRecord.addEncodedQuery calls
 * @author Gregor "hrax" Magdolen
 */
"use strict";

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow use of GlideRecord.addEncodedQuery calls",
      category: "Strict Mode"
    },
    schema: []
  },
  create: function(context) {
    function reportGlideRecordAddEncodedQueryCall(node) {
      // TODO: allow any depth? maybe a rule config?
      context.report({
        node: node,
        message: "Avoid using calls to GlideRecord.addEncodedQuery."
      });
    }

    return {
      "CallExpression[callee.property.name='addEncodedQuery']": reportGlideRecordAddEncodedQueryCall
    };
  }
};