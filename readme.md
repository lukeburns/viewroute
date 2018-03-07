# view router

a view router built for [morphable](https://github.com/lukeburns/morphable)

```js
npm install viewrouter
```

## usage

create a router from an object of views

```js
const router = require('viewrouter')
const route = router({ view1, view2 })
```

`route(state)` renders the current view (initially undefined), which can be changed:

```js
route.load('view1')
```

if you include `route(state)` in a morphable view, it will update itself as the router view is changed.

```js
const bel = require('bel')
const _ = require('morphable')

const view = _(state => bel`<body>${route(state)}</body>`)
document.body = view(state) // mount on body
route.load('view2')
```

see [morphable](https://github.com/lukeburns/morphable) for more details

## example

```js
const router = require('viewrouter')
const _ = require('morphable')
const bel = require('bel')

const route = router({
  on: state => bel`<div>on</div>`,
  off: state => bel`<div>off</div>`
})

const body = _(state => bel`<body>${route(state)}</body>`)
document.body = body()

route.load('on') // loads `on` view
route.load('off') // loads `off` view
route.load() // unloads view
```