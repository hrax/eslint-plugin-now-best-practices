"use strict";

var rule = require("../../rules/no-synchronous-glideajax");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("no-synchronous-glideajax", rule, {

  valid: [
    "getXMLWait();",
    "getAnswer();"
  ],

  invalid: [
    {
      code: "ga.getXMLWait();",
      errors: [
        {
          message: "Avoid using calls to synchronous GlideAjax.getXMLWait.",
          type: "CallExpression"
        }
      ]
    },
    {
      code: "ga.getAnswer();",
      errors: [
        {
          message: "Avoid using calls to synchronous GlideAjax.getAnswer.",
          type: "CallExpression"
        }
      ]
    },
    {
      code: "obj.ga.getXMLWait();",
      errors: [
        {
          message: "Avoid using calls to synchronous GlideAjax.getXMLWait.",
          type: "CallExpression"
        }
      ]
    },
    {
      code: "obj.ga.getAnswer();",
      errors: [
        {
          message: "Avoid using calls to synchronous GlideAjax.getAnswer.",
          type: "CallExpression"
        }
      ]
    }
  ]
});