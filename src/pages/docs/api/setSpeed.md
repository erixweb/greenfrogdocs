---
layout: "../../../Layouts/DocsLayout.astro"
title: "Player setSpeed"
---

# player.setSpeed

In GreenFrog you can change the player's speed by using the `setSpeed` method. It only takes one argument, the speed, which is type of `number` from 0 up to 3.5 (3.4 and lots of decimals). Here's a summary:

```
player.setSpeed = function (speed: Number) {}
```

# Plugin example

In this example, we'll do a plugin that changes the player speed by a random number between 0.1 and 3.4 each time the player moves.

```
const randomSpeed = (min, max) => {
    return Math.random() * (max - min + 1) + min
}

const playerMoveEvent = (event) => {
    const player = event.player

    player.setSpeed(randomSpeed(0.1, 2.4))
}

module.exports = {
    onLoad () {
        Frog.eventEmitter.on("playerMove", (...args) => { playerMoveEvent(...args, Frog) })
    }
}
```