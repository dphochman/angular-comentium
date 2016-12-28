# AngularJS Comment List

Forked from [AngularJS Phone Catalog Tutorial Application, branch 1.4-snapshot](angular-phonecat-1.4).

This document contains additions to [angular-phonecat-1.4-readme]. 

## Objective: Implement a posting system (Comments / Issues / Tasks / etc.)

Implement a simple issue posting system that supports inline HTML and Tags.
* Display a list of elements on the screen based on the following API definition:
```
{
    id: "1",
    title: "this is an item",
    text: "This is a description of the item. it might describe a bug/task/comment, it can also display <a href=\"www.google.com\">Links</a>",
    tags: ["bug", "issue", "etc"]
}
```
* Each element on the screen should support the following features:
    * An element should be read only by default (with no input elements)
        * In read only mode, **internal element text should support HTML tags**
    * Each comment element should have the following buttons:
        * Edit - Clicking on an Edit button should transform the element into an editable widget that allows modified all the properties of the element.
            1. When in edit mode, there should be a way to cancel the changes or save them.
            1. Allow adding exsiting tags, based on tags in other elements or new ones if the user types a tag that doesn't exist.
            1. Comment text should spport simple html tag.
        * Delete - Delete a comment element
* There should be a way to filter elements based on tags. The user should only be able to select tags that are available in any of the elements.
* At the end of the comment list, there should always be an editable comment element for adding new comments.

General Guidelines
1. Use AngularJS (v1.x)
    1. Define at least one Controller, one Service and one Directive
2. Use LESS/SASS (Bootstrap styling is fine, try to add some custom modifications)
3. Since there's no API defined, use mock data in the form of a .json file, but utilize Angular Resource for that.
    1. Only one place should know about the Mock usae. Ther rest of the code should work with it as if it's coming from an API.
4. Commit the result to Github/BitBucket
5. No need for RTF support, simple html tags are enough
6. The screenshots I provided are just for general idea. There is no requirement to use that specific UI design.

**I _don't_ want the full issue tracking system in Github**, I gave it as an example for the commenting part. The task is to display a list of entries based on the API and allow editing them.

You can refer to Github Issues (commenting system) as a general example:


## Prerequisites

See the "Prerequisites" section of [angular-phonecat-1.4-readme].

### Gulp

- Gulp and some plugins are used to build the app for deployment.
- Install Gulp and related dependencies (`npm install`).


## Workings of the application

- The application filesystem layout structure is based on the [angular-seed] project.
- There is no dynamic backend (no application server) for this application. Instead we fake the
  application server by fetching static json files.
- Read the Development section at the end to familiarize yourself with running and developing
  an angular application.



## Development with angular-commentium

See the "Development with angular-phonecat" section on [angular-phonecat-1.4-readme].

### Build and Deploy.

To build the application for deployment:
```
npm run build
```

It will clean and update the build/ folder with deployable assets, and update the dist/ folder with assets that can be deployed to other servers.

To run the built version of the application on port 8001:
- `npm run start-built-server`
- navigate your browser to `http://localhost:8001/app/index.html` to see the app running in your browser.



## Application Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      index.html        --> app layout file (the main html template file of the app)
      js/               --> javascript files
        app.js          --> the main application module
        controllers.js  --> application controllers
        directives.js   --> application directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        animations.js   --> hooks for running JQuery animations with ngAnimate
      partials/         --> angular view partials (partial html templates) used by ngRoute
        partial1.html
        partial2.html
      bower_components  --> 3rd party js libraries, including angular and jquery

    build/              --> build artifacts
    dist/               --> deployable artifacts

    test/               --> test source files and libraries
      karma.conf.js        --> config file for running unit tests with Karma
      protractor-conf.js   --> config file for running e2e tests with Protractor
      e2e/
        scenarios.js       --> end-to-end specs
      unit/             --> unit level specs/tests
        controllersSpec.js --> specs for controllers
        directivesSpec.js  --> specs for directives
        filtersSpec.js     --> specs for filters
        servicesSpec.js    --> specs for services

## Contact

For more information on AngularJS please check out http://angularjs.org/

[7 Zip]: http://www.7-zip.org/
[angular-seed]: https://github.com/angular/angular-seed
[DI]: http://docs.angularjs.org/guide/di
[directive]: http://docs.angularjs.org/guide/directive
[filterFilter]: http://docs.angularjs.org/api/ng/filter/filter
[git-home]: http://git-scm.com
[git-github]: http://help.github.com/set-up-git-redirect
[ngRepeat]: http://docs.angularjs.org/api/ng/directive/ngRepeat
[ngView]: http://docs.angularjs.org/api/ngRoute/directive/ngView
[node-download]: http://nodejs.org/download/
[$resource]: http://docs.angularjs.org/api/ngResource/service/$resource
[$route]: http://docs.angularjs.org/api/ngRoute/service/$route
[protractor]: https://github.com/angular/protractor
[jasmine]: http://pivotal.github.com/jasmine/
[karma]: http://karma-runner.github.io
[angular-phonecat-1.4]: https://github.com/angular/angular-phonecat/tree/1.4-snapshot
[angular-phonecat-1.4-readme]: https://github.com/angular/angular-phonecat/blob/1.4-snapshot/README.md
