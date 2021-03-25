"use strict";

var rule = require("../../rules/no-hardcoded-id");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("no-hardcoded-id", rule, {

  valid: [
    "var foo = \"9d385017c611228701d22104cc95c37\"",
    "var foo = \"a9d385017c611228701d22104cc95c3712\""
  ],

  invalid: [
    {
      code: "var foo = \"9d385017c611228701d22104cc95c371\"",
      errors: [
        {
          message: "Avoid using hardcoded Sys ID \"9d385017c611228701d22104cc95c371\".",
          type: "Literal"
        }
      ]
    },
    {
      code: "var foo = \"https://<instance name>.service-now.com/nav_to.do?uri=incident.do?sys_id=9d385017c611228701d22104cc95c374\"",
      errors: [
        {
          message: "Avoid using hardcoded Sys ID \"9d385017c611228701d22104cc95c374\".",
          type: "Literal"
        }
      ]
    },
    {
      code: "var foo = [\"foo\", \"bar9d385017c611228701d22104cc95c372\", \"foobar\", \"9d385017c611228701d22104cc95c373\"]",
      errors: [
        {
          message: "Avoid using hardcoded Sys ID \"9d385017c611228701d22104cc95c373\".",
          type: "Literal"
        }
      ]
    },
    {
      code: "var foo = {\"foo\": \"9d385017c611228701d22104cc95c375\", \"cat9d385017c611228701d22104cc95c376\": \"foo\"}",
      errors: [
        {
          message: "Avoid using hardcoded Sys ID \"9d385017c611228701d22104cc95c375\".",
          type: "Literal"
        }
      ]
    },
    {
      code: "if (true === \"9d385017c611228701d22104cc95c377\"){}",
      errors: [
        {
          message: "Avoid using hardcoded Sys ID \"9d385017c611228701d22104cc95c377\".",
          type: "Literal"
        }
      ]
    }
  ]
});