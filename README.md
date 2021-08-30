# Salesorderfrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## command for create and run a container
docker run --name salesorderfrentend -d -p 8086:80 --link orderapi salesorderfrontend

## command for build an image
docker build --tag salesorderfrontend .

## command CURL via POST (returnByEmailAndPassword)
curl -X POST -H "Content-Type: application/json" -d '{"id": "1", "email": "frmauro8@gmail.com", "password": "123", "token": ""}' http://192.168.49.2:31007/users/
