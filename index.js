
//'use strict'

var thunk = require('gocsp-thunk')
var readline = require('readline')

function question(str) {
    return thunk(function (done) {
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        rl.question(str || '', function(answer) {
            rl.close()
            done(null, answer)
        })
    })
}
exports.question = question

// http://stackoverflow.com/questions/24037545/how-to-hide-password-in-the-nodejs-console
function password(str) {
    return thunk(function (done) {
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        var stdin = process.openStdin()
        process.stdin.on("data", function(char) {
            char = char + ""
            switch (char) {
                case "\n":
                case "\r":
                case "\u0004":
                    stdin.pause()
                    break
                default:
                    process.stdout.write("\033[2K\033[200D" + str + Array(rl.line.length+1).join("*"))
                    break
            }
        })
        rl.question(str || '', function(answer) {
            rl.history = rl.history.slice(1)
            rl.close()
            done(null, answer)
        })
    })
}
exports.password = password
