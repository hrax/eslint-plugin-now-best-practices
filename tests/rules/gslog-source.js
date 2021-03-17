"use strict";

var rule = require("../../rules/gslog-source");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("gslog-source", rule, {

  valid: [
    "gs.log(\"test\", \"source\");",
    "gs.log(getMessage(), getSource());"
  ],

  invalid: [
    {
      code: "gs.log()",
      errors: [
        {
          message: "Avoid using calls to gs.log without 2 arguments.",
          type: "CallExpression"
        }
      ]
    },
    {
      code: "gs.log(\"invalid\")",
      errors: [
        {
          message: "Avoid using calls to gs.log without 2 arguments.",
          type: "CallExpression"
        }
      ]
    },
    {
      code: "gs.log(\"definitely invalid\", \"source\", \"definitely invalid\")",
      errors: [
        {
          message: "Avoid using calls to gs.log without 2 arguments.",
          type: "CallExpression"
        }
      ]
    }
  ]
});