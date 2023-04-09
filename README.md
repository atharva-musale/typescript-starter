# Typescript starter template

This repository has some of the basic elements configured to use typescript with vanilla HTML and CSS.
Instead of transpiling your typescript code manually through terminal, this project will allow you to use a single command to build and watch your typescript code.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before you can build and test the project, you must install and configure the following products on your development machine:

  * [Git](http://git-scm.com) and/or the **GitHub app** (for [Mac](http://mac.github.com) or  [Windows](http://windows.github.com)). [GitHub's Guide to Installing Git](https://help.github.com/articles/set-up-git) is a good source of information.

  * [Node.js](http://nodejs.org), (version as specified in package.json) which is used to run tests, and generate distributable files. Depending on your system, you can install Node either from source or as a pre-packaged bundle.

  * [Chrome](https://www.google.com/chrome/browser/desktop/index.html), we use Chrome to run and debug the code.

## Folder Structure

The root of the repo consists of package.json and other configuration files.
The HTML, CSS and Typescript code is written in src.
The path where the bundled javascript code will be generated after transpilation can be configured in webpack.config.js, the default path is, 'public/bundle'.

## Setting up the project

To install the JavaScript modules needed to build:

```shell
# Install project dependencies (package.json)
npm install
```

To run the project use the liveserver extension in vscode, and run the following command on terminal:

```shell
npm run start
```