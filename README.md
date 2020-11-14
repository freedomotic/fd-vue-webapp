# fd-vue-webapp

A Vue.js client for [Freedomotic](https://www.freedomotic-iot.com) framework.

---

[![Build Status](https://travis-ci.org/freedomotic/fd-vue-webapp.svg?branch=master)](https://travis-ci.org/freedomotic/fd-vue-webapp)
[![Code Triagers Badge](https://www.codetriage.com/freedomotic/fd-vue-webapp/badges/users.svg)](https://www.codetriage.com/freedomotic/fd-vue-webapp)

## Scope of the project

This repository contains the implementation of a front end client for [Freedomotic](https://www.freedomotic-iot.com).
The aim of this project is to reproduce all features already integrated in our Java frontend, that's available [here](https://github.com/freedomotic/freedomotic/tree/master/plugins/devices/frontend-java).

To have a broad idea about its features you can have a look at our [YouTube channel](https://www.youtube.com/freedomotic).

## Screenshoot

### Dashboard Page
![Dashboard page](/img/fd-vue-dashboard1.png)
![Dashboard page with environment menu open](/img/fd-vue-dashboard2.png)

### Things Panel

![Things Panel](/img/fd-vue-things-panel.png)

### Plugins Panel

![Plugins Panel](/img/fd-vue-plugins-panel.png)

### Automations Panel

![Automations Panel](/img/fd-vue-automations-panel.png)

### Mobile

![Mobile home page](/img/fd-vue-mobile-home.png)
![Mobile things page](/img/fd-vue-mobile-things.png)
![Mobile plugins page](/img/fd-vue-mobile-plugins.png)
![Mobile automations page](/img/fd-vue-mobile-automations.png)

## Pre-requirements

In order to execute this `fd-vue-webapp` client locally, first you need to download and launch an instance of Freedomotic on your machine.
Freedomotic is a framework built in Java, so the only pre-requirement to make it running is to have a Jre8 installation on your machine.

### Download and launch the latest build of the framework

You can download the latest available daily build available [here](http://teamcity.jetbrains.com/guestAuth/repository/download/bt1177/.lastSuccessful/freedomotic-5.6.0-%7Bbuild.number%7D.zip)

The zipped version of this daily build contains a jar file, named `freedomotic.jar` that you can run by executing the following command:

```java
java -jar freedomotic.jar
```

### Freedomotic RESTful endpoints

Once launched, a local setup of Freedomotic RESTful APIs will be available at `localhost:9111`.

### Freedomotic Polymer client, an inspiration

Some time ago we developed a first client prototype using Polymer (here it is a [brief video](https://www.youtube.com/watch?v=0pN-8mbNuQk) showing its features).
Polymer client source code is hosted [here](https://github.com/freedomotic/fd-polymer-webapp) on GitHub: maybe you can look at it to have some inspiration.

**WARNING**: At the moment that project is deprecated.


### Technical notes

This project uses Vue.js and [Quasar](https://quasar.dev/) framework.

### How to launch it

Clone or fork this repository, then follows the following set of commands:

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# create a production build
npm run build
```

# Contributing

If you like to contribute to this project, please follow our guidelines, available [here](https://github.com/freedomotic/fd-vue-webapp/blob/master/CONTRIBUTING.md).


# Partners

This project is supported by:

<img src="https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/SVG/DO_Logo_horizontal_blue.svg" width="201px">
