"use strict";

var rule = require("../../rules/no-gslog");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("no-gslog", rule, {

  valid: [
    "test.log();",
    "gs.random.log()",
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