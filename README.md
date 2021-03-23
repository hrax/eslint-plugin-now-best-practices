# ServiceNow Best Practices ESLint Plugin [![Test](https://github.com/hrax/eslint-plugin-now-best-practices/actions/workflows/test.yml/badge.svg)](https://github.com/hrax/eslint-plugin-now-best-practices/actions/workflows/test.yml)

Set of [Service Now technical best practice](https://developer.servicenow.com/dev.do#!/guides/orlando/now-platform/tpb-guide/scripting_technical_best_practices) rules to highlight common errors that occur during development of Service Now applications.

*This plugin is not a replacement for tools such as QualityClouds or other PMD tools.*

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

Or use one of the available configurations under the extends section. See Configurations section to see available rules for each configuration.

```json
{
  "extends": ["plugin:@hrax/now-best-practices/configuration-name"]
}
```

## Rules

| Rule name                | Category       | Description | 
| ------------------------ | -------------- | ----------- |
| gslog-source             | Best Practices | Enforce use of gs.log calls with 2 arguments
| no-dotwalk-ref-id        | Best Practices | Disallow dot-walking to the sys_id of reference field
| no-encoded-query-literal | Strict Mode    | Enforce use of GlideRecord.addEncodedQuery calls without hardcoded literals
| no-encoded-query         | Strict Mode    | Disallow use of GlideRecord.addEncodedQuery calls
| no-gslog                 | Strict Mode    | Disallow use of gs.log calls
| no-gsprint               | Strict Mode    | Disallow use of gs.print calls
| no-gssql                 | Strict Mode    | Disallow use of gs.sql calls
| no-hardcoded-id          | Best Practices | Disallow hardcoded Sys ID in Literals
| no-rowcount              | Best Practices | Disallow use of GlideRecord.getRowCount calls
| no-synchronous-glideajax | Best Practices | Disallow use of of synchronous GlideAjax.getXMLWait and GlideAjax.getAnswer calls

## Configurations

### *recommended* Configuration

| Rule name                | Reports as 
| ------------------------ | ----------------------- 
| gslog-source             | *warning*
| no-dotwalk-ref-id        | *warning*
| no-encoded-query-literal | *warning*
| no-gsprint               | *error*
| no-gssql                 | *error*
| no-hardcoded-id          | *error*
| no-rowcount              | *error*
| no-synchronous-glideajax | *warning*

### *strict* Configuration

| Rule name                | Reports as           
| ------------------------ | ----------------------- 
| no-dotwalk-ref-id        | *error*
| no-encoded-query         | *error*
| no-gslog                 | *error*
| no-gsprint               | *error*
| no-gssql                 | *error*
| no-hardcoded-id          | *error*
| no-rowcount              | *error*
| no-synchronous-glideajax | *error*

## *snow* Environment

Service Now environment to register "common" globals available within Service Now platform. 

| Global                   | Writable
| ------------------------ | -----------------------
| global                   | false
| current                  | false
| previous                 | false
| action                   | false
| gs                       | false
| Class                    | false
| AbstractAjaxProcessor    | false
| GSLog                    | false
| GlideRecord              | false
| GlideAggregate           | false
| GlideElement             | false
| GlideDateTime            | false
| GlideFilter              | false
| GlideSchedule            | false
| GlideRecordUtil          | false
| JSUtil                   | false
| ArrayUtil                | false
| DurationCalculator       | false
| j2js                     | false
| JSON                     | false
| JSONParser               | false
| g_menu                   | false
| g_item                   | false
| g_list                   | false
| g_form                   | false
| g_scratchpad             | false
| g_user                   | false
| GlideAjax                | false
| GlideDialogWindow        | false
| GlideList2               | false
| GlideMenu                | false
| GlideUser                | false
| data                     | true
| input                    | false
| angular                  | false