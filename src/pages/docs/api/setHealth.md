---
layout: "../../../Layouts/DocsLayout.astro"
title: "Player setHealth"
---

# player.setHealth

GreenFrog's API provides a method to set someone's health.

Here you can see the code.

```
player.setHealth = function (health, cause = DamageCause.UNKNOWN) {}
```

Player's setHealth function requires atleast 1 argument and up to 2 arguments. `Health` is the required argument, it can be a number from 0 up to 20. Then, `cause` argument can be a string with these values: `unknown`, `fall_damage`, `regeneration`, `void` and `plugin`

```
player.setHealth(
    health: Number // number from 0 to 20
    cause: String // string "unknown" | "fall_damage" | "regeneration" | "void" | "plugin"
)
```

# Plugin example
Let's make a plugin that sets your health to 19 when you move.

```
const Frog = require("../../src/Frog")

const playerMoveEvent = (event, Frog) => {
    const player = event.player
    
    player.setHealth(19)
}

module.exports = {
    onLoad () {
        Frog.eventEmitter.on("playerMove", (...args) => { playerMoveEvent(...args, Frog) })
    },
}
```