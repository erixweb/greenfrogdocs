---
layout: "../../Layouts/DocsLayout.astro"
title: "Player Interface - TypeScript Only"
section: 'none'
---

# Player Interface (TS)

We'll use the `Player` interface in our examples so we can have autocomplete at the time of writing it.

```ts
/// <reference path="../../index.d.ts" />
import { Player } from "Frog";
```

- Here's an example of how you can use it.

```ts
/// <reference path="../../index.d.ts" />
import { Player } from "Frog";

import * as Frog from "../../src/Frog";

export function onLoad(): void {
    Frog.eventEmitter.on("playerSpawn", (event: any) => {
       const player: Player = event.player;

       player.setHunger(10);
    });
}

export function onShutdown(): void {
    // ...
}
```