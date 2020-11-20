# dexie-encrypted-build

ES5 build of [dexie-encrypted]

[dexie-encrypted]: https://www.npmjs.com/package/dexie-encrypted/v/1.2.2

## Versioning

The version of this package follows the version of `dexie-encrypted` that's included.

For example, `dexie-encrypted-build@1.2.200` is the first build of `dexie-encrypted@1.2.2`.

## Installing

    $ npm install dexie-encrypted-build

## Using

    import encrypt from 'dexie-encrypted-build' // instead of 'dexie-encrypted'

See the [dexie-encrypted] documentation.

### Requirements

* [dexie](https://www.npmjs.com/package/dexie) (v2 or v3) must be provided as a peer dependency.

* In older browsers, the following polyfills may be required:
    * [TextDecoder](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder)
    * [TextEncoder](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder)


## Building

1. `$ yarn`
2. `$ yarn build`

If building a newer version of `dexie-encrypted` (e.g. `1.2.3`),
bump the dependency version of `dexie-encrypted` in `package.json`
and set this package's version to `1.2.300`.

If building a new build of an existing version of `dexie-encrypted`,
bump the patch version.
