---
layout: "../../../Layouts/DocsLayout.astro"
title: "Player setHunger"
---

# player.setHunger

GreenFrog provides an easy way to update the player's hunger using `setHunger`. It allows 2 parameters and 1 is optional. These parameters are `hunger` which is type of number and `cause` which is type of string. 

`hunger` parameter can be a number from 0 to 20  
`cause` parameter value can be `normal`, `plugin` and `unknown` 

Here's a summary:

```ts
player.setHunger = function (
    health: Number, // number from 0 up to 20
    cause: String = "unknown" // string 'normal' | 'plugin' | 'unknown'
)
```

# Plugin example

Here, we'll detect each time a player moves and decrease its hunger by 1.

```ts
// IPlayer in 
import type { IPlayer } from "./types.d.ts"

const playerMoveEvent = (event: any) => {
    // Get the player that moved
    const player: IPlayer = event.player

    // Decrease player's hunger by 1
    player.setHunger(player.hunger - 1) 
}

module.exports = {
    onLoad () {
        // Execute playerMoveEvent function each time player moves
        Frog.eventEmitter.on("playerMove", (...args: any) => { playerMoveEvent(...args, Frog) })
    }
}
```