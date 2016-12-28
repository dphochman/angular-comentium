# Lab notes, Sun, 25/Dec/2016

## Setup dev environment

Setting up an Angular 1.4 development environment for the Viventium coding project.  I expect that a live preview of my submission would be more valuable than a source code repository alone, so I started a new plunk on [Plunker](http://www.plnkr.co) with Angular 1.4, which is 1.4.9.  Moved some of the JavaScript from Plunker's template files into separate files for each concern (e.g. a controller, service, & directive).  Renamed the app from "plunker" to "commentium".  

Replaced the Hello World text with the current day of the week so that it's clear that expressions are being evaluated properly and that any changes are reflected in the view.  To allow inserting HTML into the view, added sanitizer@1.4.9.  Tried to add angular-router (ngRoute) but Plunker only has version 1.5.  So I added references to ngSanitize and ngRoute v.1.4.9 manually to index.html, and loaded them as dependencies in the module.

At this point, Plunker displays "Bad Request", and after some tinkering, I realize there may be assumptions inside the Plunker environment that are not visible to me that will prevent me from finishing this in a timely manner.

So let's just go old school and modify an angular application template from angular.org locally, and post it to github.  I download the example app using the instructions on https://code.angularjs.org/1.4.12/docs/tutorial/index and proceed to install it.

Of course, there are problems, because... Windows.  First, `npm install` shows many errors... in addition to the usual 'fsevents' error on windows, node-gyp won't install.  It looks like a problem with Python (it requires 2.7, I have 3.5 installed). So I install Python 2.7 and that doesn't help. Then I change the path to make Python 3.5 completely invisible ... no dice.  Eventually, thanks to advice found on stackexchange.com, I install `npm install windows-build-tools` as administrator, and `npm install` works.  

# Lab Notes, Wed, 28/Dec/2016

Starting with the Angular 1.4 phone catalog example app 'angular-phonecat'.  It
* separates controllers, directives, services, & filters, across runtime & unit tests, 
* sets up the runtime angular scrips via bower and the development dependencies via npm/package.json,
* provides helpful development scripts,
* sets a reasonable file structure.

What am I building here?

- - -
## Objective: Implement a posting system (Comments / Issues / Tasks / etc.)
Implement a simple issue posting system that supports inline HTML and Tags.
* Display a list of eleents on the screen based on the following API definition:
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
...image...
- - -

## Tasks

* Create a local dev directory for commentim, with npm, git, angular 1.4, gulp.
* Initiate a repo on github.
* 
