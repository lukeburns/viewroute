# viewroute

a view router for [morphable](https://github.com/lukeburns/morphable)

```js
npm install viewroute
```

## usage

```js
const router = require('viewroute')
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