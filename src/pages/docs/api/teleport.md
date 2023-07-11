---
layout: "../../../Layouts/DocsLayout.astro"
title: "Player teleport"
---

# player.teleport

You can teleport players in GreenFrog by passing three arguments to the `teleport` method in the `players` object. These arguments are `x`, `y` and `z`. Here's a summary:

```ts
player.teleport = function (x: number, y: number, z: number) {}
```

# X Y Z

These letters are the player coordinates. You can find them by enabling the showCoordinates gamerule. Coordinate are type of number.

# Plugin Example

```ts
import type { IPlayer } from "./types.d.ts"

const spawnCoordinates: Object = {
    x: 0,
    y: 0,
    z: 0
} // Put the coordinates into an object

const playerSpawnEvent = (event: any, Frog) => {
    const player: IPlayer = event.player // Get the player who spawned

    player.teleport(spawnCoordinates.x, spawnCoordinates.y, spawnCoordinates.z) // Teleport player
}

module.exports = {
    onLoad () {
        Frog.eventEmitter.on("playerSpawn", (...args: any) => { playerSpawnEvent(...args, Frog) }) // Detect when player spawns and pass the arguments.
    }
}
```