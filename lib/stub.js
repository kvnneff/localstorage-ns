export default function Store () {
  if (!(this instanceof Store)) return new Store()
  this.store = {}
}

Store.prototype.getItem = function getItem (key) {
  return key in this.store ? this.store[key] : null
}

Store.prototype.setItem = function setItem (key, value) {
  this.store[key] = value
  return true
}

Store.prototype.removeItem = function removeItem (key) {
  var found = key in this.store
  if (found) return delete this.store[key]
  return false
}

Store.prototype.clear = function clear () {
  this.store = {}
  return true
}
