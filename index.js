(function() {
  'use strict'

  var supported = ['date', 'hours'],
    toPascal = function(name) {
      return name[0].toUpperCase() + name.substr(1)
    },
    toNames = function(name) {
      var pascal = toPascal(name)
      return {
        name: name,
        getter: 'get' + pascal,
        setter: 'set' + pascal
      }
    },
    date_adder = function(src, params) {
      var result = new Date(+src)

      Object.keys(params)
        .filter(function(name) {
          return supported.indexOf(name) !== -1
        })
        .map(toNames)
        .forEach(function(names) {
          result[names.setter](result[names.getter]() + params[names.name])
        })
      return result
    }

  if (typeof module === 'object') {
    // CommonJS
    module.exports = date_adder;
  } else {
    // Browser global.
    window.generateUrl = date_adder;
  }
})()
