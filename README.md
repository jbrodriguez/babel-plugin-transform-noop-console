# babel-plugin-transform-noop-console

Noop console.* calls

## Installation

```sh
$ npm install babel-plugin-transform-noop-console
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-noop-console"]
}
```

### Via CLI

```sh
$ babel --plugins transform-Noop-console script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-noop-console"]
});
```
