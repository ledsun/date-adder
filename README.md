# date-adder

An adding machine of objects of The Date.

Dateオブジェクトの加算機です。

This function will return a new instance, not mutate the parameters.

新しいインスタンスを返します、パラメータを変化させません。

[![Build Status](https://travis-ci.org/ledsun/date-adder.svg)](https://travis-ci.org/ledsun/date-adder)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/date-adder.svg)](https://saucelabs.com/u/date-adder)

## Usage

実行例
```js
dateAdder(new Date(2014,10,27), {hours: 1}) //Thu Nov 28 2014 00:00:00 GMT+0900 (JST)
```

## Setup

### For Node.js
インストール
```
npm install git://github.com/ledsun/date-adder.git
```

実行例
```js
var dateAdder = require('date-adder')

dateAdder(new Date(2014,10,27), {hours: 1})
```

### For browser
ダウンロード
```
curl https://raw.githubusercontent.com/ledsun/date-adder/master/index.js -o date-adder.js
```

htmlにscriptタグを埋め込みます。
```html
<html>

<body>
<span id="result"></span>
<script src="date-adder.js"></script>
<script>
document.getElementById('result').innerHTML = dateAdder(new Date(2014, 10, 27), {
    hours: 1
})
</script>
</body>

</html>
```

## Parameters
- [x] years
- [x] months
- [x] days
- [x] hours
- [x] minutes
- [x] seconds
- [x] milliseconds

## Todo
- [x] CI in the travis.ci
- [x] browser support
- [x] check cross browser compatibility
- [ ] npm publish
- [ ] bower register

## Contributing

contributeするには

1. Fork it.
1. Create a branch (git checkout -b my_function)
1. Commit your changes (git commit -am "Added My Function")
1. Push to the branch (git push origin my_function)
1. Open a Pull Request
1. Enjoy a refreshing coffe and wait

### Testing
#### Node.js

mocha is used to test.

mochaを使います。

```
npm install -g mocha
npm install
npm test
```

#### browser

[zuul](https://github.com/defunctzombie/zuul) is used to test.

zuulを使います。
```
npm install -g zuul
zuul --local 8080 -- test
```
