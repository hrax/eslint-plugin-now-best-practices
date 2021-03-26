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

## Rules

Add rule to the rules section of your `.eslintrc` configuration file.

```json
{
    "rules": {
        "@hrax/now-best-practices/rule-name": 2
    }
}
```

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

Add configuration to the extends section of your `.eslintrc` configuration file.

```json
{
  "extends": ["plugin:@hrax/now-best-practices/configuration-name"]
}
```

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

## Environments

Add environment to the env section of your `.eslintrc` configuration file.

```json
{
  "env": {
    "environment-name": true
  }
}
```

### *snow-server* Environment

Service Now environment to register "common" globals available within Service Now platform.

| Global                   | Writable  | References
| ------------------------ | --------- | --------------
| global                   | false     | Service Now *global* application scope
| current                  | false     | currently edited GlideRecord
| previous                 | false     | previous version of currently edited GlideRecord
| action                   | false     | type of current action
| gs                       | false     | global GlideSystem shortcut
| Class                    | false     | global Service Now Class implementation
| AbstractAjaxProcessor    | false     | [AJAX processor base class](https://docs.servicenow.com/bundle/quebec-application-development/page/script/ajax/topic/p_AJAX.html#d46119e309) (Quebec)
| GSLog                    | false     | [GSLog](https://docs.servicenow.com/bundle/quebec-application-development/page/script/useful-scripts/reference/r_GSLog.html) (Quebec)
| GlideRecord              | false     | [GlideRecord](https://developer.servicenow.com/dev.do#!/reference/api/quebec/server_legacy/c_GlideRecordAPI?navFilter=gliderecord) (Quebec)
| GlideAggregate           | false     | [GlideAggregate](https://developer.servicenow.com/dev.do#!/reference/api/quebec/server_legacy/c_GlideAggregateAPI?navFilter=glideaggrega) (Quebec)
| GlideElement             | false     | [GlideElement](https://developer.servicenow.com/dev.do#!/reference/api/quebec/server_legacy/c_GlideElementAPI?navFilter=GlideElement) (Quebec)
| GlideDateTime            | false     | [GlideDateTime](https://developer.servicenow.com/dev.do#!/reference/api/quebec/server_legacy/c_GlideDateTimeAPI?navFilter=GlideDateTime) (Quebec)
| GlideFilter              | false     | [GlideFilter](https://developer.servicenow.com/dev.do#!/reference/api/quebec/server/no-namespace/c_GlideFilterScopedAPI?navFilter=GlideFilter) (Quebec)
| GlideSchedule            | false     | [GlideSchedule](https://developer.servicenow.com/dev.do#!/reference/api/quebec/server/no-namespace/c_GlideScheduleScopedAPI?navFilter=GlideSchedule) (Quebec)
| GlideRecordUtil          | false     | [GlideRecordUtil](https://developer.servicenow.com/dev.do#!/reference/api/quebec/server_legacy/c_GlideRecordUtilAPI?navFilter=GlideRecordUtil) (Quebec)
| JSUtil                   | false     | [JSUtil](https://developer.servicenow.com/dev.do#!/reference/api/quebec/server_legacy/c_JSUtilAPI?navFilter=JSUtil) (Quebec)
| ArrayUtil                | false     | [ArrayUtil](https://developer.servicenow.com/dev.do#!/reference/api/quebec/server_legacy/c_ArrayUtilAPI?navFilter=ArrayUtil) (Quebec)
| DurationCalculator       | false     | [DurationCalculator](https://developer.servicenow.com/dev.do#!/reference/api/quebec/server_legacy/c_DurationCalculatorAPI?navFilter=DurationCalculator) (Quebec)
| j2js                     | false     | [j2js](https://developer.servicenow.com/dev.do#!/reference/api/quebec/server_legacy/c_J2jsAPI?navFilter=j2js) (Quebec)
| JSON                     | false     | [JSON](https://developer.servicenow.com/dev.do#!/reference/api/quebec/server_legacy/c_JSONAPI?navFilter=JSON) (Quebec)
| JSONParser               | false     | [JSONParser](https://developer.servicenow.com/dev.do#!/reference/api/quebec/server_legacy/c_JSONParserAPI?navFilter=JSON) (Quebec)
| g_scratchpad             | false     | variable for [GlideFormScratchpad](https://developer.servicenow.com/dev.do#!/reference/api/quebec/server/no-namespace/c_GlideFormScratchpadScopedAPI?navFilter=GlideFormScratchpad) (Quebec)


### *snow-client* Environment
| Global                   | Writable  | References
| ------------------------ | --------- | --------------
| g_menu                   | false     | variable for GlideMenu
| g_item                   | false     | variable for GlideMenu
| g_list                   | false     | variable for GlideList2
| g_form                   | false     | variable for [GlideForm](https://developer.servicenow.com/dev.do#!/reference/api/quebec/client/c_GlideFormAPI?navFilter=glideForm) (Quebec)
| g_scratchpad             | false     | variable for [GlideFormScratchpad](https://developer.servicenow.com/dev.do#!/reference/api/quebec/server/no-namespace/c_GlideFormScratchpadScopedAPI?navFilter=GlideFormScratchpad) (Quebec)
| g_user                   | false     | variable for GlideUser
| GlideAjax                | false     | client [GlideAjax](https://developer.servicenow.com/dev.do#!/reference/api/quebec/client/c_GlideAjaxAPI?navFilter=GlideAjax) (Quebec)
| GlideDialogWindow        | false     | client [GlideDialogWindow](https://developer.servicenow.com/dev.do#!/reference/api/quebec/client/c_GlideDialogWindowAPI?navFilter=GlideDialogWindow) (Quebec)
| GlideList2               | false     | client [GlideList2](https://developer.servicenow.com/dev.do#!/reference/api/quebec/client/c_GlideList2API?navFilter=GlideList2) (Quebec)
| GlideMenu                | false     | client [GlideMenu](https://developer.servicenow.com/dev.do#!/reference/api/quebec/client/c_GlideMenuAPI?navFilter=GlideMenu) (Quebec)
| GlideUser                | false     | client [GlideUser](https://developer.servicenow.com/dev.do#!/reference/api/quebec/client/c_GlideUserAPI?navFilter=GlideUser) (Quebec)


### *snow-sp* Environment
| Global                   | Writable  | References
| ------------------------ | --------- | --------------
| data                     | true      | server variable in Service Portal
| input                    | false     | server variable in Service Portal
| angular                  | false     | server variable in Service Portal
| $sp                      | false     | server variable in Service Portal
| spUtil                   | false     | server variable in Service Portal
| g_service_catalog        | false     | server variable in Service Portal
| g_list                   | false     | server variable in Service Portal
| g_form                   | false     | server variable in Service Portal
| GlideAjax                | false     | server variable in Service Portal
| GlideRecord              | false     | server variable in Service Portal
