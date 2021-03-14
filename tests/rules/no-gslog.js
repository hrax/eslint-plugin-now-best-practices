"use strict";

var rule = require("../../rules/no-gslog");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "env": {
    "es6": true
  }
});
ruleTester.run("no-gslog", rule, {

  valid: [
    "test.log();",
    "GS.log();",
    "gs.Log();"
  ],

  invalid: [
    {
      code: "gs.log()",
      errors: [
        {
          message: "Avoid using calls to gs.log; consider replacement in favor of GSLog.",
          type: "CallExpression"
        }
      ]
    }
  ]
});