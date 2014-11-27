(function() {
    var date_adder= function(){}

  if (typeof module === 'object') {
    // CommonJS
    module.exports = date_adder;
  } else {
    // Browser global.
    window.generateUrl = date_adder;
  }
})()
