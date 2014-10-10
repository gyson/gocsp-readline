
var question = require('..').question
var password = require('..').password

question('name: ', function (err, name) {
    password('password: ', function (err, pswd) {
        console.log({
            name: name,
            password: pswd
        })
    })
})
