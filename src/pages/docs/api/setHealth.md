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

Player's setHealth function requires 2 arguments but 1 is optional. Health is the required argument, it can be a number from 0 up to 20. Then, cause argument can be a string with these values: `unknown`, `fall_damage`, `regeneration`, `void` and `plugin`

```
player.setHealth(
    health // number from 0 to 20
    cause // string "unknown" | "fall_damage" | "regeneration" | "void" | "plugin"
)
```