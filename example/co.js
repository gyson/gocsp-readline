
var co = require('gocsp-co')

var question = require('..').question
var password = require('..').password

co.spawn(function* () {
    var my_account = yield question('Your account: ')
    var my_password = yield password('Your password: ')
    console.log({
        account: my_account,
        password: my_password
    })
})
