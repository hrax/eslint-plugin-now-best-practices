// Disallow use of gs.sql
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
    
    function checkGsLogCall(aNode) {
      if (aNode.callee.type !== "MemberExpression" || aNode.callee.object.type !== "Identifier" || aNode.callee.property.type !== "Identifier" || aNode.callee.object.name !== "gs" || aNode.callee.property.name !== "sql") {
        return;
      }
      
      context.report({
        node: aNode,
        message: "Avoid using calls to gs.sql."
      });
    }

    return {
      "CallExpression": checkGsLogCall
    };
  }
};