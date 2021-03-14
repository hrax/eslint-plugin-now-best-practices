"use strict";

var rule = require("../../rules/no-encoded-query");
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
ruleTester.run("no-encoded-query", rule, {

  valid: [
    "addEncodedQuery();"    
  ],

  invalid: [
    {
      code: "current.addEncodedQuery()",
      errors: [
        {
          message: "Avoid using calls to GlideRecord.addEncodedQuery.",
          type: "CallExpression"
        }
      ]
    }
  ]
});