/**
 * @fileoverview Disallow dot-walking to the sys_id of reference field
 * @author Gregor "hrax" Magdolen
 */
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
    function reportDotWalkToId(node) {
      context.report({
        node: node,
        message: "Avoid Dot-Walking to the sys_id of a Reference Field \"{{field}}\".",
        data: {
          "field": node.object.property.name
        }
      });
    }

    return {
      "MemberExpression[property.name='sys_id'][object.type='MemberExpression']": reportDotWalkToId
    };
  }
};