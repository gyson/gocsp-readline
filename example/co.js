
// use it with co
var co = require('co')

var question = require('..').question
var password = require('..').password

co(function* () {
    var my_account = yield question('Your account: ')
    var my_password = yield password('Your password: ')
    console.log({
        account: my_account,
        password: my_password
    })
})()
