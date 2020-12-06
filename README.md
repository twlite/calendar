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