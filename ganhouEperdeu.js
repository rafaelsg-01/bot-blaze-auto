


var dicVar = require('./variavel.js')
var robot = require("robotjs")


var verifVerde

function setIntervalVerifVerde() {
    verifVerde = setInterval(function () {

        let posVerde = robot.getPixelColor(dicVar.local_Pixel_Ganhou_X, dicVar.local_Pixel_Ganhou_Y)
    
        if (posVerde === dicVar.cor_Pixel_Ganhou) {
            dicVar.ganhouAgora = true
            clearInterval(verifVerde)
    
            posVerde = ''
        }
         /* else {
            console.log('Verificando verde.')
            console.log('Verificando verde..')
            console.log('Verificando verde...')
        } */
    
    }, 100)
}



function stopIntervalVerifVerde() {
    clearInterval(verifVerde)
}





module.exports = {
    setIntervalVerifVerde,
    stopIntervalVerifVerde
}