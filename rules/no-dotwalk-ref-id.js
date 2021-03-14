"use strict";

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow dot-walking to the sys_id of reference field",
      category: "Best Practices"
    },
    schema: []
  },
  create: function(context) {
    function checkDotwalkId(aNode) {
      if (aNode.property.name !== "sys_id" || !isDotwalk(aNode)) {
        return;
      }

      context.report({
        node: aNode,
        message: "Avoid Dot-Walking to the sys_id of a Reference Field \"{{field}}\".",
        data: {
          "field": aNode.object.property.name
        }
      });
    }

    function isDotwalk(aNode) {
      return aNode.object.type === "MemberExpression";
    }

    return {
      "MemberExpression": checkDotwalkId
    };
  }
};