# Valid CSS Props

```bash
npm install valid-css-props
```

## API

```js
var validCSSProps = require('validCSSProps');

console.log(validCSSProps['background-color']); // => true
console.log(validCSSProps['abc']); // => false
console.log(validCSSProps['-webkit-transition']); 
// => false, the non-vendor-prefixed version works
```

## License

MIT.
