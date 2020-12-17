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
    year: 2021,
    month: 0
});

console.log(calendar.create());
```

## Deno

```js
import Calendar from "https://deno.land/x/calendar/mod.ts";

const calendar = new Calendar({
    year: 2021,
    month: 0
});

console.log(calendar.create());
```

## Creating HTML output

```js
const calendar = new Calendar({
    year: 2021,
    month: 0
});

console.log(calendar.toHTML());
```

### Output
**raw**
```html
<table width="100%"><caption>January 2021</caption><thead><tr><th class="sunday">Sunday</th><th class="monday">Monday</th><th class="tuesday">Tuesday</th><th class="wednesday">Wednesday</th><th class="thursday">Thursday</th><th class="friday">Friday</th><th class="saturday">Saturday</th></tr></thead><tbody><tr><td class="day"></td><td class="day"></td><td class="day"></td><td class="day"></td><td class="day"></td><td class="day">1</td><td class="day">2</td></tr><tr><td class="day holiday">3</td><td class="day">4</td><td class="day">5</td><td class="day">6</td><td class="day">7</td><td class="day">8</td><td class="day">9</td></tr><tr><td class="day holiday">10</td><td class="day">11</td><td class="day">12</td><td class="day">13</td><td class="day">14</td><td class="day">15</td><td class="day">16</td></tr><tr><td class="day holiday">17</td><td class="day">18</td><td class="day">19</td><td class="day">20</td><td class="day">21</td><td class="day">22</td><td class="day">23</td></tr><tr><td class="day holiday">24</td><td class="day">25</td><td class="day">26</td><td class="day">27</td><td class="day">28</td><td class="day">29</td><td class="day">30</td></tr><tr><td class="day holiday">31</td><td class="day"></td><td class="day"></td><td class="day"></td><td class="day"></td><td class="day"></td><td class="day"></td></tr></tbody></table>
```

**Preview**
<table width="100%"><caption>January 2021</caption><thead><tr><th class="sunday">Sunday</th><th class="monday">Monday</th><th class="tuesday">Tuesday</th><th class="wednesday">Wednesday</th><th class="thursday">Thursday</th><th class="friday">Friday</th><th class="saturday">Saturday</th></tr></thead><tbody><tr><td class="day"></td><td class="day"></td><td class="day"></td><td class="day"></td><td class="day"></td><td class="day">1</td><td class="day">2</td></tr><tr><td class="day holiday">3</td><td class="day">4</td><td class="day">5</td><td class="day">6</td><td class="day">7</td><td class="day">8</td><td class="day">9</td></tr><tr><td class="day holiday">10</td><td class="day">11</td><td class="day">12</td><td class="day">13</td><td class="day">14</td><td class="day">15</td><td class="day">16</td></tr><tr><td class="day holiday">17</td><td class="day">18</td><td class="day">19</td><td class="day">20</td><td class="day">21</td><td class="day">22</td><td class="day">23</td></tr><tr><td class="day holiday">24</td><td class="day">25</td><td class="day">26</td><td class="day">27</td><td class="day">28</td><td class="day">29</td><td class="day">30</td></tr><tr><td class="day holiday">31</td><td class="day"></td><td class="day"></td><td class="day"></td><td class="day"></td><td class="day"></td><td class="day"></td></tr></tbody></table>

## String

```js
const calendar = new Calendar({
    year: 2021,
    month: 0
});

console.log(calendar.toString());
```

### Output

```xl
╔═════════╤══════╗
║ January │ 2021 ║
╚═════════╧══════╝
┌────────┬────────┬─────────┬───────────┬──────────┬────────┬──────────┐
│ Sunday │ Monday │ Tuesday │ Wednesday │ Thursday │ Friday │ Saturday │
├────────┼────────┼─────────┼───────────┼──────────┼────────┼──────────┤
│        │        │         │           │          │ 1      │ 2        │
├────────┼────────┼─────────┼───────────┼──────────┼────────┼──────────┤
│ 3      │ 4      │ 5       │ 6         │ 7        │ 8      │ 9        │
├────────┼────────┼─────────┼───────────┼──────────┼────────┼──────────┤
│ 10     │ 11     │ 12      │ 13        │ 14       │ 15     │ 16       │
├────────┼────────┼─────────┼───────────┼──────────┼────────┼──────────┤
│ 17     │ 18     │ 19      │ 20        │ 21       │ 22     │ 23       │
├────────┼────────┼─────────┼───────────┼──────────┼────────┼──────────┤
│ 24     │ 25     │ 26      │ 27        │ 28       │ 29     │ 30       │
├────────┼────────┼─────────┼───────────┼──────────┼────────┼──────────┤
│ 31     │        │         │           │          │        │          │
└────────┴────────┴─────────┴───────────┴──────────┴────────┴──────────┘
```