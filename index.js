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
    rejectUnsupported = function(name) {
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
    date_adder = function(src, params) {
      return Object.keys(params)
        .filter(rejectUnsupported)
        .map(function(name) {
          return toMaterials(name, params)
        })
        .reduce(add, new Date(+src))
    }

  if (typeof module === 'object') {
    // CommonJS
    module.exports = date_adder;
  } else {
    // Browser global.
    window.generateUrl = date_adder;
  }
})()
