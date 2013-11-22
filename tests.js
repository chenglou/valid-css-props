// tests are done using node. Run `npm test`
var assert = require('assert');
var isValidCSSProp = require('./');

assert(isValidCSSProp('background-color'));
assert(isValidCSSProp('-webkit-transition'));
assert(!isValidCSSProp('abc'));
assert(!isValidCSSProp('--moz'));
assert(!isValidCSSProp('-moz-'));
assert(!isValidCSSProp('-moz-a'));
assert(!isValidCSSProp('-moz-TRANSITION'));
assert(!isValidCSSProp('moz-TRANSITION'));

console.log('Everything passes!');
