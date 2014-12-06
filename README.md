# date-adder

An adding machine of objects of The Date.

Dateオブジェクトの加算機です。

This function will return a new instance, not mutate the parameters.

新しいインスタンスを返します、引数を変化させません。

[![Build Status](https://travis-ci.org/ledsun/date-adder.svg)](https://travis-ci.org/ledsun/date-adder)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/date-adder.svg)](https://saucelabs.com/u/date-adder)

## Usage

実行例
```js
dateAdder(new Date(2014,10,27), {days: 1}) //Thu Nov 28 2014 00:00:00 GMT+0900 (JST)

dateAdder(new Date(2014,10,27), {hours: 1}) //Thu Nov 27 2014 01:00:00 GMT+0900 (JST)

dateAdder(new Date(2014,10,27), {days: 1, hours: 1}) //Thu Nov 28 2014 01:00:00 GMT+0900 (JST)
```

### Parameters
- years
- months
- days
- hours
- minutes
- seconds
- milliseconds

## Setup

### For Node.js
インストール
```
npm install date-adder
```

実行例
```js
var dateAdder = require('date-adder')

dateAdder(new Date(2014,10,27), {hours: 1})
```

### For browsers
ダウンロード
```
curl https://raw.githubusercontent.com/ledsun/date-adder/master/index.js -o date-adder.js
```

htmlにscriptタグを埋め込みます。
```html
<span id="result"></span>
<script src="date-adder.js"></script>
<script>
document.getElementById('result').innerHTML = dateAdder(new Date(2014, 10, 27), {
    hours: 1
})
</script>
```

### For bower
インストール

```
bower install date-adder
```

htmlにscriptタグを埋め込みます。
```html
<span id="result"></span>
<script src="bower_components/date-adder/index.js"></script>
<script>
document.getElementById('result').innerHTML = dateAdder(new Date(2014, 10, 27), {
    hours: 1
})
</script>
```

## Contributing

contributeするには

1. Fork it.
1. Create a branch (git checkout -b my_function)
1. Commit your changes (git commit -am "Added My Function")
1. Push to the branch (git push origin my_function)
1. Open a Pull Request
1. Enjoy a refreshing coffe and wait

### Build

```
npm install
npm run build
```

The main function in `src/dateAdder.js`.

主な関数は`src/dateAdder.js`に入っています。

`src/dateAdder.js` is converted to `index.js` as [UMD](https://github.com/umdjs/umd) by [gulp](http://gulpjs.com/).

`src/dateAdder.js`を[gulp](http://gulpjs.com/)使って[UMD](https://github.com/umdjs/umd)に変換します。変換した先は`index.js`です。

### Testing
#### Node.js

[mocha](https://github.com/mochajs/mocha) is used to test.

[mocha](https://github.com/mochajs/mocha)を使います。

```
npm install
npm run build
npm test
```

#### browser

Open `example.html` to check `index.js` is loadable by a browser.

ブラウザで読み込めるか確認するには、`example.html`を開きます。

```
open example.js
```


[zuul](https://github.com/defunctzombie/zuul) is used to check `index.js` works in corss borwsers.

クロスブラウザで動作するか確認するには、[zuul](https://github.com/defunctzombie/zuul)を使います。

```
npm run browser
```

### Deploy

Update `package.json`.

`package.json`を更新します。

```
npm install
npm run build
npm test
npm publish
```
