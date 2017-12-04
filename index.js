/**
 * Throttles execution of given function
 * @param  {function} func  - function to execute
 * @param  {number}   delay - delay in milisecionds
 * @param  {object}   scope - optional scope in which function will be executed
 * @return {function}       - wrapped func
 */
module.exports = function throttleFrequency(func, delay, scope) {
   var delay = delay || 500;
   var scope = scope || this;
   var busy  = false;

   return function() {
     if (busy) { return; }
     busy = true;
     setTimeout(function() { busy = false; }, delay);
     func.apply(scope, [].slice.apply(arguments));
  };
};
