---
layout: "../../../Layouts/DocsLayout.astro"
title: "Player setGamemode"
section: 'api'
---

# player.setGamemode

To set someone's gamemode you must use setGamemode. It takes one argument and it must be a string with all these possible values: `creative`, `survival`, `spectator`, `adventure` and `fallback`.

Here's a summary:

```ts
import type { Gamemodes } from "./types.d.ts"

player.setGamemode = function (
    gamemode: Gamemodes
) {}
```

# Plugin example

```ts
import type { IPlayer } from "./types.d.ts"

const playerSpawnEvent = (event: any) => {
    const player: IPlayer = event.player

    player.setGamemode("survival")
}

module.exports = {
    onLoad () {
        Frog.eventEmitter.on((...args: any) => { playerSpawnEvent(...args, Frog) })
    }
}
```