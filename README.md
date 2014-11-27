# date-adder

An adding machine of objects of The Date.

Dateオブジェクトの加算機です。

This function will return a new instance, not mutate the parameters.

新しいインスタンスを返します、パラメータを変化させません。

[![Build Status](https://travis-ci.org/ledsun/date-adder.svg)](https://travis-ci.org/ledsun/date-adder)

## Usage

実行例
```js
date-adder(new Date(2014,10,27), {hours: 1}) //Thu Nov 28 2014 00:00:00 GMT+0900 (JST)
```

## Setup

### For Node.js
インストール
```
npm install git://github.com/ledsun/date-adder.git
```

実行例
```js
var date-adder = require('date-adder')

date-adder(new Date(2014,10,27), {hours: 1})
```

### For browser
インストール
```
bower install git://github.com/ledsun/date-adder.git
```

htmlにscriptタグを埋め込みます。
```html
<script src="bower_components/date-adder/index.js"></script>
<script>
console.log(
    date-adder(new Date(2014,10,27), {hours: 1})
)
</script>
```

## Parameters
- years
- months
- days
- hours
- minutes
- seconds
- milliseconds

## Contributing

contributeするには

1. Fork it.
1. Create a branch (git checkout -b my_function)
1. Commit your changes (git commit -am "Added My Function")
1. Push to the branch (git push origin my_function)
1. Open a Pull Request
1. Enjoy a refreshing coffe and wait

### Testing
Node.jsで実行
```
npm install
npm test
```

ブラウザで実行
```
npm install
bower install
open test/index.html
```
