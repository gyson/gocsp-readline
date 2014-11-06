
# gocsp-readline

works with gocsp-co, promise, co, callbacks

### example with gocsp-co

```js
var go = require('gocsp-co')

var question = require('gocsp-readline').question
var password = require('gocsp-readline').password

co.spawn(function* () {
    var my_account = yield question('Your account: ')
    var my_password = yield password('Your password: ')
    console.log({
        account: my_account,
        password: my_password
    })
})
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
