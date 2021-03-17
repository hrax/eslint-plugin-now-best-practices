/**
 * @fileoverview Disallow gs.log calls without 2 arguments
 * @author Gregor "hrax" Magdolen
 */
"use strict";

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Enforce use of gs.log calls with 2 arguments",
      category: "Best Practices"
    },
    schema: []
  },
  create: function(context) {
    function checkGsLogCall(node) {
      const ALLOWED_ARGS_NO = 2;
      // Skip if is not GlideSystem call, not a log call or has 2 arguments
      if (node.arguments.length === ALLOWED_ARGS_NO) {
        return;
      }

      context.report({
        node: node,
        message: "Avoid using calls to gs.log without 2 arguments."
      });
    }

    return {
      "CallExpression[callee.object.name='gs'][callee.property.name='log']": checkGsLogCall
    };
  }
};
