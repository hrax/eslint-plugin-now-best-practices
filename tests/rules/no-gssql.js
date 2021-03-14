"use strict";

var rule = require("../../rules/no-gssql");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "env": {
    "es6": true
  }
});
ruleTester.run("no-gslog", rule, {

  valid: [
    "test.sql();",
    "GS.sql();",
    "gs.Sql();"
  ],

  invalid: [
    {
      code: "gs.sql()",
      errors: [
        {
          message: "Avoid using calls to gs.sql.",
          type: "CallExpression"
        }
      ]
    }
  ]
});