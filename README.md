# fd-vue-webapp

A Vue.js client for Freedomotic

---

[![Build Status](https://travis-ci.org/freedomotic/fd-vue-webapp.svg?branch=master)](https://travis-ci.org/freedomotic/fd-vue-webapp)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/aa58b9cb1ca94be0aba76c2c217542df)](https://www.codacy.com/app/mcicolella/fd-vue-webapp?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=freedomotic/fd-vue-webapp&amp;utm_campaign=Badge_Grade)

## Scope of the project

This repository contains the implementation of a front end client for [Freedomotic](http://www.freedomotic.com).  
The aim of this project is to reproduce all features already integrated in our Java frontend, that's available [here](https://github.com/freedomotic/freedomotic/tree/master/plugins/devices/frontend-java).

To have a broad idea about its features you can have a look at our [YouTube channel](https://www.youtube.com/freedomotic).

## Prerequirements

In order to execute this `fd-vue-webapp` client, first you need to download and launch an instance of Freedomotic on your machine.
Freedomotic is a framework built in Java, so the only pre-requirement to make it running locally is to have a JRE8 installation on your machine.

### Download and launch the latest build of the framework

You can download the latest available daily build available [here](http://teamcity.jetbrains.com/guestAuth/repository/download/bt1177/.lastSuccessful/freedomotic-5.6.0-%7Bbuild.number%7D.zip)

The zipped version of this daily build contains a jar file, named `freedomotic.jar` that you can run by executing the following command:

```java
java -jar freedomotic.jar
```

### Freedomotic RESTful endpoints

Once launched, a local setup of Freedomotic RESTful APIs will be available at `localhost:9111`.

### Freedomotic Polymer client, an inspiration

Some time ago we developed a first client prototype using Polymer (here it is a [brief video](https://www.youtube.com/watch?v=0pN-8mbNuQk) showing its features). With a running freedomotic instance, you can try also this Polymer client by your browser to `http://localhost:8090`.
Polymer client source code is hosted [here](https://github.com/freedomotic/fd-polymer-webapp) on GitHub: maybe you can look at it to have some inspiration. 

**WARNING**: At the moment that project is almost abandoned.

## `fd-vue-webapp`

### How to launch it

Clone or fork this repository, then follows the following set of commands:

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

### Build for production with minification

To build this project for production you can execute the following command:

```bash
    npm run build
```

Also, if you need to build for production and view the bundle analyzer report, you can run:

```bash
    npm run build --report
```
### Testing fd-vue-webapp

This application contains both unit and end to end tests. You can run them by executing, respectively, the following commands:

```bash
# run unit tests
npm run unit
```
```bash
# run e2e tests
npm run e2e
```
Eventually, if you like, you can also run both unit and e2e tests with a single command:

```bash
npm test
```

### Technical notes

The scaffolding of this front end application has been done using `vue-cli`.
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# Contributing

If you like to contribute to this project, please follow our guidelines, available [here](https://github.com/freedomotic/fd-vue-webapp/blob/master/CONTRIBUTING.md).

