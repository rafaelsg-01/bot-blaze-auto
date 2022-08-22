


var robot = require('robotjs')
var dicVar = require('./variavel.js')



function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms)
}


function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




function clickMouse(testeFT=false){

    robot.mouseClick()

}





function clickMouseComplexo(testeFT=false){
    var limiteQnt = 0
    var mexer = random(1, 100)

    var input_p1_xAgora = robot.getMousePos().x
    var input_p1_yAgora = robot.getMousePos().y

    var somaRx = 0
    var somaRy = 0

    if (mexer <= 27) {
        robot.mouseClick()
    } 

    else {
        var somaRx = random(-4, 4) 
        var input_p1_xNova = input_p1_xAgora + somaRx

        var somaRy = random(-4, 4) 
        var input_p1_yNova = input_p1_yAgora + somaRy


        while (input_p1_xNova >= dicVar.posicaoInicial_x+Math.trunc((dicVar.largura+3)*2) || input_p1_xNova <= dicVar.posicaoInicial_x-Math.trunc((dicVar.largura+3)*2)){
            somaRx = random(-4, 4) ; input_p1_xNova = input_p1_xAgora + somaRx

            limiteQnt++
            if (limiteQnt >= 100) {
                dicVar.posicaoInicial_x = robot.getMousePos().x ; dicVar.posicaoInicial_y = robot.getMousePos().y
                limiteQnt = 0 ; console.log('Localização nova do mouse = ' + dicVar.posicaoInicial_x + ', ' + dicVar.posicaoInicial_y + ' 1')
                break
            }
        }

        while(input_p1_yNova >= dicVar.posicaoInicial_y+Math.trunc((dicVar.altura+3)*2) || input_p1_yNova <= dicVar.posicaoInicial_y-Math.trunc((dicVar.altura+3)*2)){
            somaRy = random(-4, 4) ; input_p1_yNova = input_p1_yAgora + somaRy

            limiteQnt++
            if (limiteQnt >= 100) {
                dicVar.posicaoInicial_x = robot.getMousePos().x ; dicVar.posicaoInicial_y = robot.getMousePos().y
                limiteQnt = 0 ; console.log('Localização nova do mouse = ' + dicVar.posicaoInicial_x + ', ' + dicVar.posicaoInicial_y + ' 2')
                break
            }
        }

        while (input_p1_xNova !== input_p1_xAgora && input_p1_yNova !== input_p1_yAgora) {
        

            if (input_p1_xNova !== input_p1_xAgora){
                var m0ou1 = random(0, 1)
                if (input_p1_xAgora > input_p1_xNova) {
                input_p1_xAgora -= m0ou1
                } 

                else {
                input_p1_xAgora += m0ou1
                }
            }



            if (input_p1_yNova !== input_p1_yAgora){
                if (input_p1_yAgora > input_p1_yNova) {
                input_p1_yAgora -= m0ou1
                } 

                else {
                input_p1_yAgora += m0ou1
                }
            }


            sleep(random(0, 15))
            robot.moveMouse(input_p1_xAgora, input_p1_yAgora)
            sleep(random(0, 15))

            limiteQnt++
            if (limiteQnt >= 100) {
                dicVar.posicaoInicial_x = robot.getMousePos().x ; dicVar.posicaoInicial_y = robot.getMousePos().y
                limiteQnt = 0 ; console.log('Localização nova do mouse = ' + dicVar.posicaoInicial_x + ', ' + dicVar.posicaoInicial_y + ' 3')
                break
            }
        }

        robot.mouseClick()
    }
}

/* setInterval(() => {

    console.log(robot.getPixelColor(robot.getMousePos().x, robot.getMousePos().y))
    console.log(robot.getMousePos().x + ', ' + robot.getMousePos().y)
    console.log('')

}, 2000); */




module.exports = {
    clickMouse,
    clickMouseComplexo,
    random,
    sleep
}