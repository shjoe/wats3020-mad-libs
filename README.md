# WATS 3020: Mad Libs

In order to begin getting familiar with the process of writing JavaScript and
the syntax of the language, this exercise has been designed to let you play
with some simple commands.

You will be declaring a bunch of variables and using the `prompt()` command to
gather information from the user. The information you gather will then be
inserted into a text template to generate a story. This project borrows the
concept from the ["Mad Libs"](https://en.wikipedia.org/wiki/Mad_Libs) style of
games, which is meant to be humorous because the stories often come out all
crazy.

Refer to the comments in `js/main.js` for information about everything that is
required and how to complete all of the requirements listed below.

## Project Resources

It might be helpful to review some additional resources as you work through
this project:

* [window.prompt() documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
* [Arithmetic Operators in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)
* [JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

This project was also created to go along with [A Practical Introduction to JavaScript](https://suwebdev.github.io/WATS-3020-gitbook/)
which can be accessed for free.

## Basic Requirements

In order to successfully complete this exercise, you must complete the following
requirements:

* Write all of the variable declarations listed in `js/main.js`
* Properly use the `prompt()` command and write sensible text for the user to read.
* Use at least two different arithmetic operators to generate the section numbers.
* Update all of the comments in `js/main.js` so that they make sense to a developer coming to your code for the first time.
* Push your source code to your `master` branch.
* Deploy your site to master branch.

## Stretch Goals

If you want to push this project further, you can try some of the following:

* Enhance the styling of the page.
* Change the markup surrounding the output poem to facilitate more interesting stuff.
* See how far you can push things with making up new words based on what the user submitted.
* Use conditionals to alter some presentation or content based on the information the user has submitted.
* Convert the use of `prompt()` into using a proper webform (this will require you to use many more of the `document` and element manipulation methods). (NOTE: This is a serious stretch. You will need to use the `onsubmit` attribute of a `<form>` tag, or you will need to set up an event handler. And you will need to move your madlibs code into a JavaScript function.)
