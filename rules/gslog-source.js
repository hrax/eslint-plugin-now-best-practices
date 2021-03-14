// disallow gs.log calls without 2 arguments
"use strict";

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Require use of gs.log calls with 2 arguments",
      category: "Best Practices"
    },
    schema: []
  },
  create: function(context) {
    
    function checkGsLogCall(aNode) {
      if (aNode.callee.type !== "MemberExpression" || aNode.callee.object.type !== "Identifier" || aNode.callee.property.type !== "Identifier" || aNode.callee.object.name !== "gs" || aNode.callee.property.name !== "log" || aNode.arguments.length === 2) {
        return;
      }
      
      context.report({
        node: aNode,
        message: "Avoid using calls to gs.log without 2 arguments."
      });
    }

    return {
      "CallExpression": checkGsLogCall
    };
  }
};