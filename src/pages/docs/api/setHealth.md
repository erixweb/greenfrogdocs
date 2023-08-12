---
layout: "../../../Layouts/DocsLayout.astro"
title: "Player setHealth"
section: 'api'
---

# player.setHealth

GreenFrog's API provides a method to set someone's health.

Here you can see the code.

```ts
type CauseType = "unknown" | "fall_damage" | "regeneration" | "void" | "plugin"

player.setHealth = function (health: string, cause: CauseType = DamageCause.UNKNOWN) {}
```

Player's setHealth function requires atleast 1 argument and up to 2 arguments. `Health` is the required argument, it can be a number from 0 up to 20. Then, `cause` argument can be a string with these values: `unknown`, `fall_damage`, `regeneration`, `void` and `plugin`

```ts
import type { DamageCause } from './types.d.ts'


player.setHealth(
    health: Number // number from 0 to 20
    cause?: DamageCause // string "unknown" | "fall_damage" | "regeneration" | "void" | "plugin"
)
```

# Plugin example
    
Let's make a plugin that sets your health to 19 when you move.

```ts
import type { IPlayer } from "./types.d.ts"

const Frog = require("../../src/Frog")

const playerMoveEvent = (event: any, Frog: any) => {
    const player: IPlayer = event.player
    
    player.setHealth(19)
}

module.exports = {
    onLoad () {
        Frog.eventEmitter.on("playerMove", (...args: any) => { playerMoveEvent(...args, Frog) })
    },
}
```