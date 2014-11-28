var assert = require('power-assert'),
  date_adder = require('./index'),
  assertDate = function(acutal, expected, message) {
    assert.equal(acutal.getTime(), expected.getTime(), message)
  }


describe('date adder', function() {
  it('add 1 hour', function() {
    assert.equal(+date_adder(new Date(2014, 10, 28), {
      'hours': 1
    }), +new Date(2014, 10, 29))
  })
})
