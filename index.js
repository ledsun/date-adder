(function() {
    var date_adder= function(){
        return new Date(2014, 10, 29)
    }

  if (typeof module === 'object') {
    // CommonJS
    module.exports = date_adder;
  } else {
    // Browser global.
    window.generateUrl = date_adder;
  }
})()
