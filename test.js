var assert = require('power-assert'),
  dateAdder = require('./index'),
  origin = new Date(2014, 10, 28)


describe('date adder', function() {
  describe('various pamams', function() {
    it('add 1 year', function() {
      assert.equal(+dateAdder(origin, {
        'years': 1
      }), +new Date(2015, 10, 28))
    })

    it('add 1 months', function() {
      assert.equal(+dateAdder(origin, {
        'months': 1
      }), +new Date(2014, 11, 28))
    })

    it('add 1 day', function() {
      assert.equal(+dateAdder(origin, {
        'days': 1
      }), +new Date(2014, 10, 29))
    })

    it('add 1 hour', function() {
      assert.equal(+dateAdder(origin, {
        'hours': 1
      }), +new Date(2014, 10, 28, 1))
    })

    it('add 1 minute', function() {
      assert.equal(+dateAdder(origin, {
        'minutes': 1
      }), +new Date(2014, 10, 28, 0, 1))
    })

    it('add 1 second', function() {
      assert.equal(+dateAdder(origin, {
        'seconds': 1
      }), +new Date(2014, 10, 28, 0, 0, 1))
    })

    it('add 1 millisecond', function() {
      assert.equal(+dateAdder(origin, {
        'milliseconds': 1
      }), +new Date(2014, 10, 28, 0, 0, 0, 1))
    })
  })

  describe('various values, for example hours', function() {
    it('add 1 hour', function() {
      assert.equal(+dateAdder(origin, {
        'hours': 1
      }), +new Date(2014, 10, 28, 1))
    })

    it('add 24 hours', function() {
      assert.equal(+dateAdder(origin, {
        'hours': 24
      }), +new Date(2014, 10, 29))
    })

    it('add -1 hours', function() {
      assert.equal(+dateAdder(origin, {
        'hours': -1
      }), +new Date(2014, 10, 27, 23))
    })
  })

  describe('multi pamams are added all', function() {
    it('add 1 per all params', function() {
      assert.equal(+dateAdder(origin, {
        'years': 1,
        'months': 1,
        'days': 1,
        'hours': 1,
        'minutes': 1,
        'seconds': 1,
        'milliseconds': 1
      }), +new Date(2015, 11, 29, 1, 1, 1, 1))
    })
  })

  describe('unsupported pamams is ignored', function() {
    it('add 1 foo', function() {
      assert.equal(+dateAdder(origin, {
        'foo': 1
      }), +origin)
    })
  })

  describe('missing arguments', function() {
    it('return new object unless params', function() {
      var newOne = dateAdder(origin)
      assert.notEqual(newOne, origin)
      assert.equal(+newOne, +origin)
    })

    it('return now unless src', function() {
      assert.equal(+dateAdder(), +(new Date))
    })
  })
})
