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

## What am I building here?

Read the requirements on [README.md](./README.md).


## Scope

* Feature: Dislay comments in a list.
* Feature: Render inline HTML in a comment item's text.
* Feature: Edit comment item with the Edit button.
* Feature: Edit button transforms read-only comment to editable form, in place.
* Feature: In Edit mode, "text" supports inline HTML input.
* Feature: In Edit mode, Cancel control cancels pending edits.
* Feature: In Edit mode, add a tag from another comment.
* Feature: In Edit mode, enter a new tag.
* Feature: Delete a comment with the Delete button.
* Feature: Filter elements by tag name.
* Feature: New comment form at the end of the list.


## Tasks

* Create a local dev directory for commentim, with npm, git, angular 1.4, gulp.
* Initiate a repo on github. 
* Update the README and package.json md with specifics for this project.
* Add issues on https://github.com/dphochman/angular-commentium/issues.
* Setup static data at resources/comments.json.
* Create partials for comment list, comment detail, edit form, tags.

