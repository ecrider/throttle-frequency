/**
 * Throttles execution of given function
 * @param  {function} func  - function to execute
 * @param  {number}   delay - delay in milisecionds
 * @param  {object}   scope - optional scope in which function will be executed
 * @return {function}       - wrapped func
 */
module.exports = function throttleFrequency(func, delay, scope) {
  var busy;
  return function() {
    if (busy || !(busy = true)) { return; }
    func.apply(scope || this, [].slice.apply(arguments));
    setTimeout(function() { busy = false; }, delay);
  };
};
