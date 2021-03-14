// disallow gs.print calls
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
    
    function checkGsPrintCall(aNode) {
      if (aNode.callee.type !== "MemberExpression" || aNode.callee.object.type !== "Identifier" || aNode.callee.property.type !== "Identifier" || aNode.callee.object.name !== "gs" || aNode.callee.property.name !== "print") {
        return;
      }
      
      context.report({
        node: aNode,
        message: "Avoid using calls to gs.print."
      });
    }

    return {
      "CallExpression": checkGsPrintCall
    };
  }
};