# Throttle Frequency

Simple vanilla JavaScript tool to throttle execution frequency of any given function - time in milliseconds, no initial delay, optional scope declaration.

## Installation

 Install via **[npm](https://www.npmjs.com/package/throttle-frequency)**
```shell
$ npm install throttle-frequency
```

... or **[yarn](https://yarnpkg.com/en/package/throttle-frequency)**
```shell
$ yarn add throttle-frequency
```

then require

```js
var throttleFrequency = require('throttle-frequency');
```

or import

```js
import throttleFrequency from 'throttle-frequency'
```
## Usage

### throttleFrequency(func, delay, scope);
- param  {function} func  - function to execute
- param  {number}   delay - delay in milisecionds
- param  {object}   scope - optional scope in which function will be executed
- return {function}       - wrapped func

#### Examples
Throttling variable manipulation:
```js
var test;
var testFunc = function(arg) { test = arg; };
var testFuncThrottled = throttleFrequency(funcTest, 500);

testFuncThrottled('TEST 1!');
console.log(test); // 'TEST 1!'

setTimeout(function() {
  testFuncThrottled('TEST 2!');
  console.log(test); // (after 501 ms) 'TEST 2!' 
}, 501);

testFuncThrottled('TEST 3!');
console.log(test); // 'TEST 1!'
```

Emitting debounced window resize event - a little bit more practical example
```js
var triggerEvent = function(name, data) {
  var newEvent = document.createEvent('Event');
  newEvent.initEvent(name, true, true);
  newEvent.data = data;
  window.dispatchEvent(newEvent);
};

var debounceEvent = function(opts) {
  var wrappedEvent = function(event) { triggerEvent(opts.name, event); };
  var debounced = throttleFrequency(wrappedEvent, opts.delay);
  opts.element.addEventListener(opts.type, debounced);
};

debounceEvent({
  element: window,
  type: 'resize',
  name: 'debouncedResize',
  delay: 800
});

window.addEventListener('debouncedResize', function(event) {
  console.log(event); // returns original 'resize' event object
  console.log('Width: ' + window.innerWidth + ' Height: ' + window.innerHeight);
});

```

### Author

**Kuba Paczyński**
* [github/ecrider](https://github.com/ecrider)
* [npmjs/new31337](https://www.npmjs.com/~new31337)
* [twitter/new31337](https://twitter.com/new31337)
* [linkedin/kuba-paczynski](https://www.linkedin.com/in/kuba-paczynski/)


### License

Copyright © 2017, [Kuba Paczyński](https://github.com/ecrider).
Released under the [MIT License](LICENSE).
