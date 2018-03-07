const router = require('./')
const bel = require('bel')
const _ = require('morphable')

const route = router({
  on: state => bel`<div>on</div>`,
  off: state => bel`<div>off</div>`
}, 'on')

document.body = _(state => bel`<body>${route(state)}</body>`)()

let toggle = 'on'
setInterval(() => {
  toggle = toggle === 'on' ? 'off' : 'on'
  route.load(toggle)
}, 1000)
