"use strict";

var rule = require("../../rules/no-dotwalk-ref-id");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("no-dotwalk-ref-id", rule, {

  valid: [
    "var foo = current.sys_id;",
    "var foo = current.getValue(\"sys_id\");",
    "var foo = current.u_caller.getRefRecord().getValue(\"sys_id\");",
    // Reference record was loaded, is valid
    "var foo = current.u_caller.getRefRecord().sys_id;",
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
    },
    {
      code: "var foo = current.caller_id.country.sys_id",
      errors: [
        {
          message: "Avoid Dot-Walking to the sys_id of a Reference Field \"country\".",
          type: "MemberExpression"
        }
      ]
    }
  ]
});