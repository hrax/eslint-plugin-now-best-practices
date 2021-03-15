"use strict";

var rule = require("../../rules/no-rowcount");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "env": {
    "es6": true
  }
});
ruleTester.run("no-rowcount", rule, {

  valid: [
    "getRowCount();"
  ],

  invalid: [
    {
      code: "current.getRowCount()",
      errors: [
        {
          message: "Avoid using calls to GlideRecord.getRowCount.",
          type: "CallExpression"
        }
      ]
    },
    {
      code: "obj.gr.getRowCount()",
      errors: [
        {
          message: "Avoid using calls to GlideRecord.getRowCount.",
          type: "CallExpression"
        }
      ]
    }
  ]
});