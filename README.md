
# gocsp-readline

works with gocsp, promise, co, callbacks

### example with gocsp

```js
var go = require('gocsp')

var question = require('gocsp-readline').question
var password = require('gocsp-readline').password

go(function* () {
    var my_account = yield question('Your account: ')
    var my_password = yield password('Your password: ')
    console.log({
        account: my_account,
        password: my_password
    })
})()
```

will get following output

```
$ node --harmony example/gocsp.js
Your account: MY_NAME
Your password: ***********
{ account: 'MY_NAME', password: 'MY_PASSWORD' }
```


### example with promise

```js
var question = require('gocsp-readline').question
var password = require('gocsp-readline').password

new Promise(question('name: '))
    .then(function (name) {
        console.log('Got name: ' + name)
        return new Promise(password('password: '))
    })
    .then(function (password) {
        console.log('Got password: ' + password)
    })
```

will get following output

```
$ node --harmony example/promise.js
name: MY_NAME
Got name: MY_NAME
password: ***********
Got password: MY_PASSWORD
```

### example with co

```js
// use it with co
var co = require('co')

var question = require('gocsp-readline').question
var password = require('gocsp-readline').password

co(function* () {
    var my_account = yield question('Your account: ')
    var my_password = yield password('Your password: ')
    console.log({
        account: my_account,
        password: my_password
    })
})()
```

will get following output

```
$ node --harmony example/co.js
Your account: MY_NAME
Your password: ***********
{ account: 'MY_NAME', password: 'MY_PASSWORD' }
```

### example with callback

```js
var question = require('gocsp-readline').question
var password = require('gocsp-readline').password

question('name: ', function (err, name) {
    password('password: ', function (err, pswd) {
        console.log({
            name: name,
            password: pswd
        })
    })
})
```

will get following output

```
$ node --harmony example/callback.js
name: MY_NAME
password: ***********
{ name: 'MY_NAME', password: 'MY_PASSWORD' }
```
