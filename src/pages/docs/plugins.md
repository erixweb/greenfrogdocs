---
layout: "../../Layouts/DocsLayout.astro"
title: "Plugins"
---

# Plugins

GreenFrog provides an easy API for developers who already know the basics of JavaScript. It also provides a large API with full customization.

# Intialize a plugin

If you already know the basics of JavaScript, you can start a plugin by creating a `plugins/` folder in the `src` folder (`myproject/src/plugins`).

After that, go to this directory and run `npm run plugin-structure`. Then enter your plugin name and you'll see a folder with your plugin's name with a JavaScript file. This file is your entrypoint, the file that executes when you start the server.

# Boilerplate

Although greenfrog's development experience is really fast, there's a bit of boilerplate. Let's get started:

```js
const Frog = require("../../src/Frog")

module.exports = {
    // Your events
}
```

# Tutorial

## Basic plugin

For our basic plugin we'll do a plugin that logs `"My plugin has loaded"` when the server loads and `"My plugin shut down"` when the server shuts down.

```js
const Frog = require("../../src/Frog")
const Logger = require("../../src/server/Logger");

module.exports = {
    // Executes when server loads
    onLoad () {
        // Logger provides four types of logs: log, info, error and debug
        Logger.info("My plugin has loaded")
    },
    // Executes when server shuts down
    onShutDown () {
        Logger.info("My plugin has shut down")
    }
}
```