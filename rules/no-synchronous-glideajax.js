/**
 * @fileoverview Disallow use of of synchronous GlideAjax.getXMLWait and GlideAjax.getAnswer calls
 * @author Gregor "hrax" Magdolen
 */
"use strict";

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow use of of synchronous GlideAjax.getXMLWait and GlideAjax.getAnswer calls",
      category: "Best Practices"
    },
    schema: [/* {
      type: 'boolean',
      default: false
  },
  {
      type: 'boolean',
      default: false
  }*/]
  },
  create: function(context) {
    var registeredOnly = false;
    var assumeNestedCalls = registeredOnly && (false);
    var registeredVariableNames = [];

    function registerGlideAjax(node) {
      return;
    }

    function unregisterGlideAjax(node) {
      // If this is an assignment to GlideAjax it will be handled by registerGlideAjax method
      return;
    }

    function isNodeRegistered(node) {
      return false;
    }

    function isNested(node) {
      return false;
    }

    function reportSynchronousGlideAjaxCall(node) {
      var method;

      if (registeredOnly && !isNodeRegistered(node) && !assumeNestedCalls && !isNested(node)) {
        return;
      }

      method = node.callee.property.name;

      context.report({
        node: node,
        message: "Avoid using calls to synchronous GlideAjax.{{method}}.",
        data: {
          "method": method
        }
      });
    }

    return {
      "CallExpression[callee.property.name='getXMLWait']": reportSynchronousGlideAjaxCall,
      "CallExpression[callee.property.name='getAnswer']": reportSynchronousGlideAjaxCall
      // "AssignmentExpression[right.callee.name='GlideAjax']": registerGlideAjax
      // "VariableDeclarator[init.callee.name='GlideAjax']": registerGlideAjax
      // TODO: assignment expression to unregister reassigned GlideAjax assignments
    };
  }
};