var assert = require('power-assert'),
  date_adder = require('./index'),
  assertDate = function(acutal, expected, message) {
    assert.equal(acutal.getTime(), expected.getTime(), message)
  },
  orign = new Date(2014, 10, 28)


describe('date adder', function() {
  describe('param hours', function() {
    it('add 1 hour', function() {
      assert.equal(+date_adder(orign, {
        'hours': 1
      }), +new Date(2014, 10, 28, 1))
    })

    it('add 24 hours', function() {
      assert.equal(+date_adder(orign, {
        'hours': 24
      }), +new Date(2014, 10, 29))
    })

    it('add -1 hours', function() {
      assert.equal(+date_adder(orign, {
        'hours': -1
      }), +new Date(2014, 10, 27, 23))
    })
  })

  describe('pamam date', function() {
    it('add 1 day', function() {
      assert.equal(+date_adder(orign, {
        'date': 1
      }), +new Date(2014, 10, 29))
    })
  })

  describe('multi pamams', function() {
    it('add 1 day and 1 hour', function() {
      assert.equal(+date_adder(orign, {
        'date': 1,
        'hours': 1
      }), +new Date(2014, 10, 29, 1))
    })
  })

  describe('unsupported pamams', function() {
    it('add 1 foo', function() {
      assert.equal(+date_adder(orign, {
        'foo': 1
    }), +orign)
    })
  })
})
