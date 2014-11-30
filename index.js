(function() {
  'use strict'

  var paramMap = {
      years: 'FullYear',
      months: 'Month',
      days: 'Date',
      hours: null,
      minutes: null,
      seconds: null,
      milliseconds: null
    },
    supported = Object.keys(paramMap),
    acceptSupported = function(name) {
      return supported.indexOf(name) !== -1
    },
    toPascal = function(name) {
      return name[0].toUpperCase() + name.substr(1)
    },
    toMaterials = function(name, params) {
      var standardAPI = paramMap[name] || toPascal(name)
      return {
        getter: 'get' + standardAPI,
        setter: 'set' + standardAPI,
        diff: params[name]
      }
    },
    add = function(date, d) {
      date[d.setter](date[d.getter]() + d.diff)
      return date
    },
    dateAdder = function(src, params) {
      return Object.keys(params)
        .filter(acceptSupported)
        .map(function(name) {
          return toMaterials(name, params)
        })
        .reduce(add, new Date(+src))
    }

  if (typeof module === 'object') {
    // CommonJS
    module.exports = dateAdder;
  } else {
    // Browser global.
    window.dateAdder = dateAdder;
  }
})()
