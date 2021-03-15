/**
 * @fileoverview s
 * @author Gregor Magdolen
 */
"use strict";

module.exports = {
  rules: {
    "no-hardcoded-id": require("./rules/no-hardcoded-id"),
    "no-dotwalk-ref-id": require("./rules/no-dotwalk-ref-id"),
    "no-gslog": require("./rules/no-gslog"),
    "no-gsprint": require("./rules/no-gsprint"),
    "no-encoded-query": require("./rules/no-encoded-query"),
    "gslog-source": require("./rules/gslog-source"),
    "no-encoded-query-literal": require("./rules/no-encoded-query-literal"),
    "no-gssql": require("./rules/no-gssql"),
    "no-rowcount": require("./rules/no-rowcount")
  },
  configs: {
    // Recommended best practice configuration
    recommended: {
      rules: {
        "@hrax/now-best-practices/no-hardcoded-id": "error",
        "@hrax/now-best-practices/no-dotwalk-ref-id": "warn",
        "@hrax/now-best-practices/gslog-source": "warn",
        "@hrax/now-best-practices/no-gsprint": "error",
        "@hrax/now-best-practices/no-encoded-query-literal": "warn",
        "@hrax/now-best-practices/no-gssql": "error",
        "@hrax/now-best-practices/no-rowcount": "error"
      }
    },
    // Strict enforcement of all best practices and maintenance rules
    strict: {
      rules: {
        "@hrax/now-best-practices/no-hardcoded-id": "error",
        "@hrax/now-best-practices/no-dotwalk-ref-id": "error",
        "@hrax/now-best-practices/no-gslog": "error",
        "@hrax/now-best-practices/no-gsprint": "error",
        "@hrax/now-best-practices/no-encoded-query": "error",
        "@hrax/now-best-practices/no-gssql": "error",
        "@hrax/now-best-practices/no-rowcount": "error"
      }
    }
  }
};