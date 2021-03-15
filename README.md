# eslint-plugin-now-best-practices

[![Test](https://github.com/hrax/eslint-plugin-now-best-practices/actions/workflows/test.yml/badge.svg)](https://github.com/hrax/eslint-plugin-now-best-practices/actions/workflows/test.yml)

Set of [Service Now technical best practice](https://developer.servicenow.com/dev.do#!/guides/orlando/now-platform/tpb-guide/scripting_technical_best_practices) rules to highlight common errors that occur during development of Service Now applications.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `@hrax/eslint-plugin-now-best-practices`:

```
$ npm install @hrax/eslint-plugin-now-best-practices --save-dev
```

## Usage

Add `@hrax/now-best-practices` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@hrax/now-best-practices"
    ]
}
```


Then configure the rules you want to use under the rules section. See Rules section for list of all available rules.

```json
{
    "rules": {
        "@hrax/now-best-practices/rule-name": 2
    }
}
```

Or use one of the available configurations under the extends section. See Rules section to see available rules for each configuration.

```json
{
  "extends": ["plugin:@hrax/now-best-practices/configuration-name"]
}
```

## Rules

| Rule name                | Category       | Configuration           | Description | 
| ------------------------ | -------------- | ----------------------- | ----------- |
| gslog-source             | Best Practices | recommended:1           | Enforce use of gs.log calls with 2 arguments
| no-dotwalk-ref-id        | Best Practices | recommended:1, strict:2 | Disallow dot-walking to the sys_id of reference field
| no-encoded-query-literal | Strict Mode    | recommended:1           | Enforce use of GlideRecord.addEncodedQuery calls without hardcoded literals
| no-encoded-query         | Strict Mode    | strict:2                | Disallow use of GlideRecord.addEncodedQuery calls
| no-gslog                 | Strict Mode    | strict:2                | Disallow use of gs.log calls
| no-gsprint               | Strict Mode    | recommended:2, strict:2 | Disallow use of gs.print calls
| no-gssql                 | Strict Mode    | recommended:2, strict:2 | Disallow use of gs.sql calls
| no-hardcoded-id          | Best Practices | recommended:2, strict:2 | Disallow hardcoded Sys ID in Literals
| no-rowcount              | Best Practices | recommended:2, strict:2 | Disallow use of GlideRecord.getRowCount calls



