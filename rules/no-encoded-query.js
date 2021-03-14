// disallow addEncodedQuery calls
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
    
    function checkAddEncodedQueryCall(aNode) {
      // TODO: allow any depth? maybe a rule config?
      if (aNode.callee.type !== "MemberExpression" || aNode.callee.property.name !== "addEncodedQuery") {
        return;
      }
      
      context.report({
        node: aNode,
        message: "Avoid using calls to GlideRecord.addEncodedQuery."
      });
    }

    return {
      "CallExpression": checkAddEncodedQueryCall
    };
  }
};