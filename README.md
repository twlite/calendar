# Calendar
Simple JavaScript calendar library.

# Installation
## Node

```sh
$ npm i node-calendar-js
```

# Example
## Node

```js
const { Calendar } = require("node-calendar-js");

const calendar = new Calendar({
    year: 2020,
    month: 4
});

console.log(calendar.create());
```

## Deno

```js
import Calendar from "https://deno.land/x/calendar/mod.ts";

const calendar = new Calendar({
    year: 2020,
    month: 4
});

console.log(calendar.create());
```