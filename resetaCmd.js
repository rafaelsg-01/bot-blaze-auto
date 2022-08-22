




var dicVar = require('./variavel.js')
var ferr = require('./ferramentas.js')
var robot = require('robotjs')

var pap = require('./papel.js')

const { exec } = require("child_process")


function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms)
  }



function restaCmd() {

    sleep(ferr.random(2500, 3000))
    robot.keyTap("t", "control")
    //console.log('robot.keyTap("t", "control")')
    
    sleep(ferr.random(1500, 2000))
    robot.keyTap("tab", "control")
    //console.log('"tab", "control"')

    sleep(ferr.random(1500, 2000))
    robot.keyTap("w", "control")

    sleep(ferr.random(1500, 2000))
    robot.moveMouseSmooth(dicVar.local_Pixel_Cmd_X, dicVar.local_Pixel_Cmd_Y, 1)

    // clica no CMD
    sleep(ferr.random(1500, 2000))
    ferr.clickMouse()

    // ctrol + C
    // ctrol + C
    // ctrol + C
    // ctrol + C
    // ctrol + C
    // ctrol + C
    // ctrol + C
    // ctrol + C
    
    sleep(ferr.random(1500, 2000))
    robot.keyTap("c", "control")
    
    sleep(ferr.random(1500, 2000))
    robot.keyTap("c", "control")
    
    sleep(ferr.random(1500, 2000))
    robot.keyTap("c", "control")
    
    sleep(ferr.random(1500, 2000))
    robot.keyTap("c", "control")
    
    sleep(ferr.random(1500, 2000))
    robot.keyTap("c", "control")
    
    sleep(ferr.random(1500, 2000))
    robot.keyTap("c", "control")
    
    sleep(ferr.random(1500, 2000))
    robot.keyTap("c", "control")
    
    sleep(ferr.random(1500, 2000))
    robot.keyTap("c", "control")

    // digita "npm run example"
    sleep(ferr.random(1500, 2000))
    robot.typeStringDelayed("npm run example", ferr.random(7))

    // enter
    sleep(ferr.random(1500, 2000))
    robot.keyTap("enter")

    // volta o mouse na tela e clica em um local neutro
    sleep(ferr.random(1500, 1750))
    robot.moveMouseSmooth(dicVar.local_Pixel_Navegador_X, dicVar.local_Pixel_Navegador_Y, 1)

    sleep(ferr.random(1500, 1750))
    ferr.clickMouse()

    pap.postPapel('resetaEmExecucao.txt', '0')
    pap.postPapel('travou.txt', '0')

    
    setTimeout(() => {
        try {
            exec(`forever stop 1`, (error, stdout, stderr) => {
                if (error) {
                    //console.log(`error GET: ${error.message}`)
                    return
                }
                if (stderr) {
                    //console.log(`stderr GET: ${stderr}`)
                    return
                }
                return stdout
            })
            }
        catch(error) {
            return
        }
    }, 1000)
}

restaCmd()




