
var question = require('..').question
var password = require('..').password

new Promise(question('name: '))
    .then(function (name) {
        console.log('Got name: ' + name)
        return new Promise(password('password: '))
    })
    .then(function (password) {
        console.log('Got password: ' + password)
    })
