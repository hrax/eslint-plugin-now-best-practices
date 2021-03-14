"use strict";

var rule = require("../../rules/no-gsprint");
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
ruleTester.run("no-gsprint", rule, {

  valid: [
    "test.print();",
    "GS.print();",
    "gs.Print();"
  ],

  invalid: [
    {
      code: "gs.print()",
      errors: [
        {
          message: "Avoid using calls to gs.print.",
          type: "CallExpression"
        }
      ]
    }
  ]
});