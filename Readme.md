# localStorage-ns [![travis ci](https://travis-ci.org/kvnneff/localstorage-ns.svg)](https://travis-ci.org/kvnneff/localstorage-ns)

Namespaced key/value store backed by localStorage with events and default value loading.

## Example:
```js
import Store from 'localStorage-ns'

let foo = Store('foo', {age: 34})
let bar = Store('bar', {age: 29})

foo.set('name', 'Kevin')
bar.set('name', 'Charlie')

foo.get('name') //=> 'Kevin'
foo.get('age') //=> '34'

bar.get('name') //=> 'Charlie'
bar.get('age') //=> '29'
```

## API

### Store(name, [defaults])

Create a new namespaced store with `name` and optional `defaults`.

### store#set(key, value)

Set `key` to `value`.

### store#get(key)

Return value of `key`.

### store#clear()

Clear the namespaced store.

### store#on(event, fn)

Listen for the given `event` and execute callback `fn`.  Available events are:

- **set**: Emitted whenever a `key` is being set.  Both the `key` being set and the `value` of `key` will be passed to the callback.
- **change**: Emitted on any change.  No values are passed to the callback.
- **clear**: Emitted when the store is cleared. No values are passed to the callback.

## License

MIT
