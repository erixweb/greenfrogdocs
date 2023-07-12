---
layout: "../../Layouts/DocsLayout.astro"
title: "Player Interface - TypeScript Only"
---

# Player Interface (TS)

We'll use the `Player` interface in our examples so we can have autocomplete at the time of writing the code. The interface called `IPlayer` isn't official but here are the steps so you can also have autocompletion:

- Create file types.d.ts

Here, we'll have all of our interfaces.

- Copy and paste the following code, which is the interface.

```ts
export interface IPlayer {
	sendMessage: Function;
	chat: Function;
	setGamemode: Function;
	setVelocity: Function;
	teleport: Function;
	sendPlayStatus: Function;
	transfer: Function;
	setDifficulty: Function;
	setEntityData: Function;
	kick: Function;
	setChunkRadius: Function;
	setTime: Function;
	setAttribute: Function;
	setXP: Function;
	setHealth: Function;
	setHunger: Function;
	setSpeed: Function;
	setOp: Function;
	openContainer: Function;
	setContainerItem: Function;
	offline: Boolean;
	health: number;
	hunger: number;
	gamemode: string | number;
	fallDamageQueue: number;
	location: [
        previous: [
            x: number,
            y: number,
            z: number
        ],
        x: number,
        y: number,
        z: number,
        yaw: number,
        pitch: number,
        onGround: Boolean
    ];
	isConsole: Boolean;
	world: [
        spawnCoordinates: Array<any>, 
        time: number,
        renderDistance: number,
        worldName: string,
        generator: string
    ];
	inventory: [
        lastKnownItemNetworkId: number, 
        lastKnownItemRuntimeId: number, 
        items: Array<any>, 
        container: Object
    ];
	dead: boolean;
	op: boolean;
	chunksEnabled: boolean;
	kicked: boolean;
	packetCount: number;
	permissionLevel: number;
	initialised: boolean;
	ip: string;
	port: string;
	version: number;
	username: string;
	profile: [
        name: string, 
        uuid: string, 
        xuid: string
    ];
	items: Array<any>;
}
```

- Go to your plugin entrypoint and import it

```ts
import type { IPlayer } from "types.d.ts"
```

- Here's an example of how you can use it.

```ts
// Set module to commonjs in tsconfig.json
// By setting module type to cjs, you'll have both type of modules.

import type { IPlayer } from "types.d.ts" 

const Frog = require("../../src/Frog")

const playerSpawnEvent = (event: any) => {
    const player: IPlayer = event.player

    player.setHunger(10)
}

module.exports = {
    onLoad () {
        Frog.eventEmitter.on("playerSpawn", (...args: any) => {
            const typedArgs: any = args
            
            playerSpawnEvent(typedArgs, Frog)
        })
    }
}   
```

# Damage Cause Type

This type can is used internally when using player.setHealth() method

```ts
export type DamageCause = "unknown" | "fall_damage" | "regeneration" | "void" | "plugin"
```

# Hunger Cause Type

This type is used internally when using player.setHunger() method

```ts
export type HungerCause = 'normal' | 'plugin' | 'unknown'
```