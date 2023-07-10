---
layout: "../../../Layouts/DocsLayout.astro"
title: "Player setGamemode"
---

# player.setGamemode

To set someone's gamemode you must use setGamemode. It takes one argument and it must be a string with all these possible values: `creative`, `survival`, `spectator`, `adventure` and `fallback`.

Here's a summary:

```
type GamemodesType = 'survival' | 'creative' | 'adventure' | 'spectator' | 'fallback'

player.setGamemode = function (
    gamemode: GamemodesType
) {}
```

# Plugin example

```
const playerSpawnEvent = (event) => {
    const player = event.player

    player.setGamemode("survival")
}

module.exports = {
    onLoad () {
        Frog.eventEmitter.on((...args) => { playerSpawnEvent(...args, Frog) })
    }
}
```