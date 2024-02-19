# Tenant Evaluation Angular 5.2.9 Integration


modified readme to test auto deployment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Dependency manager

Although all  packages are taken from the NPM repository this project uses Yarn as the dependency manager due to his performance. Use Yarn instead of npm to run the scripts. You download it in [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)

## Development server

* Development Mode: `yarn start`.

  It will start a server on `http://localhost:4200/` with source maps for debugging purposes and files not compressed. It will use `http://localhost:8080/api` as the API endpoint
  
  **Any change made on the code will reload the page**

* Development Mode with Remote API: `yarn start:remote_dev`.

  It will start a server on `http://localhost:4200/` with source maps for debugging purposes and files not compressed. It will use `https://dev-r2.tenantevaluation.com/api` as the API endpoint.
  
  **Any change made on the code will reload the page**
 
* Production Mode: `yarn start:prod`.

    It will start a server on `http://localhost:4200/` with files optimized. It will use `https://r2.tenantevaluation.com/api` as the API endpoint.
    
    **On the console it will be shown a error that says `Failed to register a ServiceWorker`. This is because we are using a certificate that is not valid.**
    
* QA Mode - Dev Files: `yarn start:qa:dev`.

  It will start a server on `http://localhost:4200/` with source maps for debugging purposes and files not compressed. It will use `https://qa-r2.tenantevaluation.com/api` as the API endpoint.
  
  **Any change made on the code will reload the page**
  
* QA Mode - Production Files: `yarn start:qa:prod`.

  It will start a server on `http://localhost:4200/` with files optimized. It will use `https://qa-r2.tenantevaluation.com/api` as the API endpoint.
  
  **On the console it will be shown a error that says `Failed to register a ServiceWorker`. This is because we are using a certificate that is not valid.**
  
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

The build artifacts will be stored in the `dist/` directory. Use the following scripts to generate the files depending on the desired mode:

* Development Build: `yarn build:dev`. The code will contain source maps and files not compressed. It will use `https://dev.tenantev.com/api` as the API endpoint. 
* Production Build: `yarn build:prod`. The code will contain files optimized. It will use `https://r2.tenantevaluation.com/api` as the API endpoint. 
* QA-Development Build: `yarn build:qa:dev`. The code will contain source maps and files not compressed. It will use `https://qa-r2.tenantevaluation.com/api` as the API endpoint. 
* QA-Production Build: `yarn build:qa:prod`. The code will contain files optimized. It will use `https://qa-r2.tenantevaluation.com/api` as the API endpoint. 

## Running unit tests

Unit tests are run via [Karma](https://karma-runner.github.io). The following modes are possible:

* Development Test: `yarn test:dev`. It will use the Development environment.
* QA Test: `yarn test:qa`. It will use the QA Development environment.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Setup Local Server Instance

Install MySQL server
* Create new empty database named terest
* Create new user localdevuser@localhost identified by localdevpassword with and grant all to terest
* run mysql -ulocaldevuser -p --max_allowed_packet=64m terest < terest.sql

To run local server:
* open a console window
* setup environment variables for amazon credentials
* set AWS_ACCESS_KEY_ID={key}
* set AWS_SECRET_KEY={secret}
* make sure JAVA_HOME is set and add %JAVA_HOME%/bin to path
* java -jar tenantrest-0.0.1.war (Windows)
* ./tenantrest-0.0.1.war (Mac OS X or Linux)

## To run local code on mobile device use the following:
  Must be on same network and the ip on the host needs to be the ip of the machine that is running the code. 
  
  This code needs to go on the angula-cli.json, under "defaults": {
    "styleExt": "scss",
    "component": {}
  }
```
    "serve": {
      "host": "10.0.1.91"
    }

```

auto-deployment 
QA2
      - npm build:qa2:prod
      - grep version ./package.json | cut -d '"' -f 4 | xargs -I file_name touch dist/file_name
      - aws s3 sync dist/ s3://te-tenant-fe-qa2 --delete
      - aws cloudfront create-invalidation --distribution-id E3UFG35C827ZRN --paths "/*"

