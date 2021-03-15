"use strict";

var rule = require("../../rules/no-encoded-query-literal");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "env": {
    "es6": true
  }
});
ruleTester.run("no-encoded-query-literal", rule, {

  valid: [
    "foo.addEncodedQuery(gs.getProperty(\"query\"));",
    // "foo.bar.addEncodedQuery(\"test\");",
    "addEncodedQuery(\"test\");"
  ],

  invalid: [
    {
      code: "current.addEncodedQuery(\"encodedQuery\")",
      errors: [
        {
          message: "Avoid using calls to GlideRecord.addEncodedQuery with hardcoded literals.",
          type: "CallExpression"
        }
      ]
    }
  ]
});