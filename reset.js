


var robot = require('robotjs')
var ferr = require('./ferramentas.js')
var dicVar = require('./variavel.js')
var reVar = require('./variavelReset.js')
var inicia = require('./start.js')

import { inicia } from './start'

var child_process = require('child_process')


function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms)
  }


function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function randomCaixa(p1x, p1y, p4x, p4y){

    var resX = random(p1x, p4x)
    var resY = random(p1y, p4y)

    var dicPosition = {x: resX, y: resY}

    return dicPosition
}



function restaTudo() {
    reVar.resetaVariavel()

    //console.log('Iniciou')

    sleep(random(1500, 2000))
    robot.keyTap("t", "control")
    //console.log('robot.keyTap("t", "control")')
    
    sleep(random(1500, 2000))
    robot.keyTap("tab", "control")
    //console.log('"tab", "control"')

    sleep(random(1500, 2000))
    robot.keyTap("w", "control")

    sleep(random(1500, 2000))
    var ponto0 = randomCaixa(367, 295, 436, 306)
    robot.moveMouseSmooth(ponto0.x, ponto0.y, 2)

    sleep(random(1500, 2000))
    robot.keyTap("e", "control")

    sleep(random(1500, 2000))
    robot.typeStringDelayed("blaze.com/pt/games/crash", random(50, 70))

    sleep(random(1500, 2000))
    robot.keyTap("enter")

    sleep(random(15000, 20000))
    ferr.clickMouseComplexo(false)

    sleep(random(1500, 2000))
    robot.typeStringDelayed(dicVar.aposta, random(60, 120))


    var input_p1_x = 364
    var input_p4_x = 538
    var input_p1_y = 351
    var input_p4_y = 369

    var botao_p1_x = 377
    var botao_p4_x = 576
    var botao_p1_y = 420
    var botao_p4_y = 425


    var ponto1 = randomCaixa(input_p1_x, input_p1_y, input_p4_x, input_p4_y)
    var ponto2 = randomCaixa(botao_p1_x, botao_p1_y, botao_p4_x, botao_p4_y)
    var ponto3 = randomCaixa(botao_p1_x, botao_p1_y, botao_p4_x, botao_p4_y)
    
    sleep(random(200, 600))
    robot.moveMouseSmooth(ponto1.x, ponto1.y, 1)

    sleep(random(200, 600))
    robot.moveMouseSmooth(ponto2.x, ponto2.y, 1)

    sleep(random(200, 600))
    robot.moveMouseSmooth(ponto3.x, ponto3.y, 1)

    sleep(random(1000, 3000))


    // ctrol + t
    // ctrol + tab
    // crtol + w
    // mover o mouse ate 528, 356
    // ctrol + e
    // digita: "blaze.com/pt/games/crash" e aperta enter
    // aguarda 10 segundos
    // click 100% aleatorio
    // segura shift e aperta tab 3 vezes
    // digita o valor da aposta "1.8"
    // desce o mouse ate a caixa de seleção p1 = 366, 411 e p2 = 579, 423
    // executa o comando "npm run example"

}

inicia()



module.exports = {
    restaTudo
}