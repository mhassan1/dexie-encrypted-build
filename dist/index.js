(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.DexieEncrypted = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopDefault$1(ex) {
    return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
  }

  var Dexie = _interopDefault$1(require('dexie'));

  var nacl = _interopDefault$1(require('tweetnacl'));

  var Typeson = _interopDefault$1(require('typeson'));

  var builtinTypes = _interopDefault$1(require('typeson-registry/presets/builtin')); // Import some usable helper functions


  var override = Dexie.override;
  var Promise$1 = Dexie.Promise;
  var tableEncryptionOptions = {
    DATA: 'NON_INDEXED_FIELDS',
    NON_INDEXED_FIELDS: 'NON_INDEXED_FIELDS',
    // DATA_AND_INDICES: 'DATA_AND_INDICES', // not implemented.
    WHITELIST: 'WHITELIST',
    BLACKLIST: 'BLACKLIST'
  };
  var cryptoOptions = tableEncryptionOptions;
  /* options example: 
  {
  	table1: cryptoOptions.NON_INDEXED_FIELDS,
  	table2: {
  		type: cryptoOptions.WHITELIST,
  		fields: ['harmlessData1', 'harmlessId']
  	},
  	table3: {
  		type: cryptoOptions.BLACKLIST,
  		fields: ['sensitiveField1', 'sensitiveField2']
  	}
  }
  */

  var tson = new Typeson().register([builtinTypes]);

  function overrideParseStoresSpec(origFunc) {
    return function (stores, dbSchema) {
      stores._encryptionSettings = '++id';
      origFunc.call(this, stores, dbSchema);
    };
  }

  function compareArrays(a, b) {
    if (a.length !== b.length) {
      return false;
    }

    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }

    return true;
  }

  var encoder = new TextEncoder();
  var decoder = new TextDecoder();

  function encryptObject(key, object, nonce) {
    nonce = nonce || nacl.randomBytes(nacl.secretbox.nonceLength);
    var stringToEncrypt = tson.stringify(object);
    var encoded = encoder.encode(stringToEncrypt);
    var encrypted = nacl.secretbox(encoded, nonce, key);
    var data = new Uint8Array(nonce.length + encrypted.length);
    data.set(nonce);
    data.set(encrypted, nonce.length);
    return data;
  } // this prevents changing the shape of the object so
  // the underlying engine can optimize the hidden class


  function hideValue(input) {
    switch (_typeof(input)) {
      case 'number':
        return 0;

      case 'string':
        return '';

      case 'boolean':
        return false;

      case 'undefined':
        return undefined;

      case 'symbol':
        return undefined;
    }

    return {};
  }

  function encrypt(db, keyOrPromise, cryptoSettings, onKeyChange, nonceOverride) {
    var keyPromise;

    if (keyOrPromise.then) {
      keyPromise = keyOrPromise;
    } else if (keyOrPromise instanceof Uint8Array && keyOrPromise.length === 32) {
      keyPromise = Dexie.Promise.resolve(keyOrPromise);
    } else {
      throw new Error('Dexie-encrypted requires a UInt8Array of length 32 for a encryption key.');
    }

    db.Version.prototype._parseStoresSpec = override(db.Version.prototype._parseStoresSpec, overrideParseStoresSpec);

    if (db.verno > 0) {
      // Make sure new tables are added if calling encrypt after defining versions.
      try {
        db.version(db.verno).stores({});
      } catch (error) {
        throw new Error('Dexie-encrypt: The call to encrypt() cannot be done on an open database');
      }
    }

    function encryptWithRule(table, entity, rule) {
      if (rule === undefined) {
        return entity;
      }

      var toEncrypt = {};

      if (rule.type === cryptoOptions.BLACKLIST) {
        for (var i = 0; i < rule.fields.length; i++) {
          toEncrypt[rule.fields[i]] = entity[rule.fields[i]];
          entity[rule.fields[i]] = hideValue(entity[rule.fields[i]]);
        }
      } else {
        var indices = table.schema.indexes.map(function (index) {
          return index.name;
        });
        var whitelist = rule.type === cryptoOptions.WHITELIST ? rule.fields : [];

        for (var _key in entity) {
          if (_key !== table.schema.primKey.name && entity.hasOwnProperty(_key) && indices.includes(_key) === false && whitelist.includes(_key) === false) {
            toEncrypt[_key] = entity[_key];
            entity[_key] = hideValue(entity[_key]);
          }
        }
      }

      entity.__encryptedData = encryptObject(key, toEncrypt, nonceOverride);
      return entity;
    }

    function decryptWithRule(entity, rule) {
      if (rule === undefined) {
        return entity;
      }

      if (entity && entity.__encryptedData) {
        var nonce = entity.__encryptedData.slice(0, nacl.secretbox.nonceLength);

        var message = entity.__encryptedData.slice(nacl.secretbox.nonceLength, entity.__encryptedData.length);

        var rawDecrypted = nacl.secretbox.open(message, nonce, key);
        var stringified = decoder.decode(rawDecrypted);
        var decrypted = tson.parse(stringified);
        var toReturn = {};

        for (var k in entity) {
          if (decrypted.hasOwnProperty(k)) {
            toReturn[k] = decrypted[k];
          } else if (entity.hasOwnProperty(k) && k !== '__encryptedData') {
            toReturn[k] = entity[k];
          }
        }

        return toReturn;
      }

      return entity;
    }

    var key;
    db.on('ready', function () {
      var encryptionSettings;

      try {
        encryptionSettings = db.table('_encryptionSettings');
      } catch (error) {
        throw new Error("Dexie-encrypted can't find its encryption table. You may need to bump your database version.");
      }

      return keyPromise.then(function (receivedKey) {
        if (receivedKey instanceof Uint8Array && receivedKey.length === 32) {
          key = receivedKey;
        } else {
          throw new Error('Dexie-encrypted requires a UInt8Array of length 32 for a encryption key.');
        }
      }).then(function () {
        return encryptionSettings.toCollection().last().then(function (oldSettings) {
          var changeDetectionObj = oldSettings ? oldSettings['__key_change_detection'] : null;
          var onKeyChangeResult;
          var keyChangePromise = Promise$1.resolve();

          if (changeDetectionObj) {
            var nonce = changeDetectionObj.slice(0, nacl.secretbox.nonceLength);
            var message = changeDetectionObj.slice(nacl.secretbox.nonceLength, changeDetectionObj.length);
            var rawDecrypted = nacl.secretbox.open(message, nonce, key);

            if (!rawDecrypted) {
              // The key has changed. Let's call the handler
              onKeyChangeResult = onKeyChange(db);
              keyChangePromise = onKeyChangeResult.then ? onKeyChangeResult : new Promise$1(function (resolve) {
                resolve(onKeyChangeResult);
              });
            }
          }

          return keyChangePromise.then(function () {
            return Promise$1.all(db.tables.map(function (table) {
              var oldSetting = oldSettings ? oldSettings[table.name] : undefined;
              var newSetting = cryptoSettings[table.name];

              function setupHooks() {
                if (newSetting === undefined) {
                  return;
                }

                table.hook('creating', function (primKey, obj) {
                  var preservedValue = _objectSpread2({}, obj);

                  encryptWithRule(table, obj, newSetting);

                  this.onsuccess = function () {
                    delete obj.__encryptedData;
                    Object.assign(obj, preservedValue);
                  };

                  this.onerror = function () {
                    delete obj.__encryptedData;
                    Object.assign(obj, preservedValue);
                  };
                });
                table.hook('updating', function (modifications) {
                  var encrypted = encryptWithRule(table, _objectSpread2({}, this.value), newSetting);
                  return encrypted;
                });
                table.hook('reading', function (obj) {
                  return decryptWithRule(obj, newSetting);
                });
              }

              if (oldSetting === newSetting) {
                // no upgrade needed.
                setupHooks();
                return;
              }

              if (oldSetting === undefined || newSetting === undefined) ;else if (typeof oldSetting !== 'string' && typeof newSetting !== 'string') {
                // both non-strings. Figure out if they're the same.
                if (newSetting.type === oldSetting.type) {
                  if (compareArrays(newSetting.fields, oldSetting.fields)) {
                    // no upgrade needed.
                    setupHooks();
                    return;
                  }
                }
              }
              return table.toCollection().modify(function (entity, ref) {
                var decrypted = decryptWithRule(entity, oldSetting);
                ref.value = encryptWithRule(table, decrypted, newSetting);
                return true;
              }).then(setupHooks);
            }));
          });
        }).then(function () {
          return encryptionSettings.clear();
        }).then(function () {
          return encryptionSettings.put(_objectSpread2({
            __key_change_detection: encryptObject(key, [1, 2, 3, 4, 5], new Uint8Array(24))
          }, cryptoSettings));
        })["catch"](function (error) {
          if (error.name === 'NotFoundError') {
            throw new Error("Dexie-encrypted can't find its encryption table. You may need to bump your database version.");
          } else {
            return Promise$1.reject(error);
          }
        });
      });
    });
  }

  function clearAllTables(db) {
    return Promise$1.all(db.tables.map(function (table) {
      return table.clear();
    }));
  }

  function clearEncryptedTables(_x) {
    return _clearEncryptedTables.apply(this, arguments);
  }

  function _clearEncryptedTables() {
    _clearEncryptedTables = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(db) {
      var encryptionSettings, promises;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return db.table('_encryptionSettings').toCollection().last();

            case 3:
              encryptionSettings = _context2.sent;
              _context2.next = 9;
              break;

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              throw new Error("Dexie-encrypted can't find its encryption table. You may need to bump your database version.");

            case 9:
              promises = Object.keys(encryptionSettings).map( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(key) {
                  var encryptionSettingValue;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          encryptionSettingValue = encryptionSettings[key];

                          if (!tableEncryptionOptions[encryptionSettingValue]) {
                            _context.next = 4;
                            break;
                          }

                          _context.next = 4;
                          return db.table(key).clear();

                        case 4:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x2) {
                  return _ref.apply(this, arguments);
                };
              }());
              return _context2.abrupt("return", Promise$1.all(promises));

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 6]]);
    }));
    return _clearEncryptedTables.apply(this, arguments);
  }

  Object.assign(encrypt, cryptoOptions, {
    clearAllTables: clearAllTables,
    clearEncryptedTables: clearEncryptedTables
  });
  exports.clearAllTables = clearAllTables;
  exports.clearEncryptedTables = clearEncryptedTables;
  exports.cryptoOptions = cryptoOptions;
  exports["default"] = encrypt;
  exports.tableEncryptionOptions = tableEncryptionOptions;

  var dexieEncryptedEs5 = {

  };

  return dexieEncryptedEs5;

})));
