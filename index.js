const _ = require('morphable')

module.exports = function router (views, init) {
  const localState = _({
    view: init,
    load: view => localState.view = view
  })
  const route = externalState => localState.view ? views[localState.view](externalState) : ''
  route.load = localState.load
  route.current = () => localState.view
  return route
}