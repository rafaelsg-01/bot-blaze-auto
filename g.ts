import { makeConnectionBlaze } from "../src"
const shell = require('shelljs')

let socket = makeConnectionBlaze({
    needCloseWithCompletedSession: false,
    requireNotRepeated: true,
    type: 'crash',
})
socket.ev.on('game_graphing', (msg) => {
    console.log(msg)
})
/* socket.ev.on('game_waiting', (msg) => {
    console.log(msg)
})
socket.ev.on('game_complete', (msg) => {
    console.log(msg)
}) */

setTimeout(() => {
    console.log('sair')
    socket.closeSocket()
    shell.exec('npm run teste')
    //socket.ev.removeAllListeners("game_graphing")
    //socket.ev.removeAllListeners("game_complete")
    //socket.ev.removeAllListeners("game_waiting")

}, 10000);

