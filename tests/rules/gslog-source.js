"use strict";

var rule = require("../../rules/gslog-source");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({
  "parserOptions": {
    "ecmaVersion": 2018
  }
});
ruleTester.run("gslog-source", rule, {

  valid: ["gs.log(\"test\", \"source\");"],

  invalid: [
    {
      code: "gs.log()",
      errors: [
        {
          message: "Avoid using calls to gs.log without 2 arguments.",
          type: "CallExpression"
        }
      ]
    }
  ]
});