"use strict";

var rule = require("../../rules/no-dotwalk-ref-id");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "env": {
    "es6": true
  }
});
ruleTester.run("no-dotwalk-ref-id", rule, {

  valid: [
    "var a = current.sys_id"
  ],

  invalid: [
    {
      code: "var foo = current.caller_id.sys_id",
      errors: [
        {
          message: "Avoid Dot-Walking to the sys_id of a Reference Field \"caller_id\".",
          type: "MemberExpression"
        }
      ]
    }
  ]
});