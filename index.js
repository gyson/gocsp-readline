
//'use strict'

var readline = require('readline')

function question(str, cb) {
    function handler(resolve, reject) {
        var isThunk = arguments.length === 1

        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        rl.question(str || '', function(answer) {
            rl.close()

            if (isThunk) {
                resolve(null, answer)
            } else {
                resolve(answer)
            }
        })
    }
    if (cb) {
        handler(cb)
    } else {
        return handler
    }
}
exports.question = question

// http://stackoverflow.com/questions/24037545/how-to-hide-password-in-the-nodejs-console
function password(str, cb) {
    function handler(resolve, reject) {
        var isThunk = arguments.length === 1

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

            if (isThunk) {
                resolve(null, answer)
            } else {
                resolve(answer)
            }
        })
    }
    if (cb) {
        handler(cb)
    } else {
        return handler
    }
}
exports.password = password
