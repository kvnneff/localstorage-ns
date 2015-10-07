/*global describe, it*/
import assert from 'assert'
import Store from '../lib'

describe('Store', function () {
  it('returns a new store with defaults', function () {
    let store = Store('foo', {bar: 'baz'})
    assert.equal(store.get('bar'), 'baz')
    store.clear()
  })
})

describe('Store#set', function () {
  it('sets the value of `key` to `value`', function () {
    let store = Store('foo')
    store.set('dog', 'woof')
    assert.equal(store.get('dog'), 'woof')
    store.clear()
  })
})

describe('Store#clear', function () {
  it('clears the namespaced store', function () {
    let store = Store('foo')
    store.set('dog', 'woof')
    assert.equal(store.get('dog'), 'woof')
    store.clear()
    assert.equal(store.get('dog'), null)
  })
})
