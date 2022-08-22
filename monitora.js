



var dicVar = require('./variavel.js')
var gaEpe = require('./ganhouEperdeu.js')
var robot = require('robotjs')
var reVar = require('./variavelReset.js')
//var resCmd = require('./resetaCmd.js')

var pap = require('./papel.js')
//var rest = require('./reset.js')

var robot = require("robotjs")

const { exec } = require("child_process")



console.log('')
console.log('INICIO')
console.log(new Date())
console.log('INICIO')
console.log('')

// Verifica se o bot ta funcionando a cada 5 minutos
setInterval(() => {
    console.log('')
    console.log('/////////////////////////////////')
    console.log(new Date())
    console.log('Monitorando...')
    console.log('/////////////////////////////////')
    console.log('')

    var reseta = false

    var blazeAbriu = robot.getPixelColor(dicVar.local_Pixel_BlazeAberta_X, dicVar.local_Pixel_BlazeAberta_Y) === dicVar.cor_Pixel_BlazeAberta

    var botaoEncima = robot.getPixelColor(dicVar.local_Pixel_BotaoEncima_X, dicVar.local_Pixel_BotaoEncima_Y) === dicVar.cor_Pixel_BotaoEncima
    var botaoEncimaBlock = robot.getPixelColor(dicVar.local_Pixel_BotaoEncima_X, dicVar.local_Pixel_BotaoEncima_Y) === dicVar.cor_Pixel_BotaoEncima_Block

    var lista_CWG = pap.getPapel('CWG.txt').split(',') // ['c', 'w', 'g']
    
    setTimeout(() => {
        if (lista_CWG.length <= 2) {
            reseta = true
        }
        
        //var socketFuncionando = Object.values(socket.ev)[1]

        setTimeout(() => {
            if (reseta === true || (blazeAbriu === false && pap.getPapel('jogoFuncionando.txt') === '1') || ((botaoEncima === false && botaoEncimaBlock === false) && pap.getPapel('jogoFuncionando.txt') === '1')) {

                console.log('')
                console.log('/////////////////////////////////')
                console.log(new Date())
                console.log('ERRO NO SOCKET')
                console.log('')
                console.log('lista_CWG: ' + lista_CWG + ' | ' + lista_CWG.length)
                console.log('jogoFuncionando: ' + pap.getPapel('jogoFuncionando.txt'))
                console.log('')
                console.log('blazeAbriu: ' + blazeAbriu)
                console.log('')
                console.log('botaoEncima: ' + botaoEncima)
                console.log('')
                console.log('botaoEncimaBlock: ' + botaoEncimaBlock)
                console.log('/////////////////////////////////')
                console.log('')


                if (pap.getPapel('resetaEmExecucao.txt') !== '1' || parseInt(pap.getPapel('travou.txt', true)) >=3) {
                    pap.postPapel('resetaEmExecucao.txt', '1')

                    pap.pegaGit()

                    setTimeout(() => {
                        if (isNaN(parseFloat(pap.getPapel('saldoSetado/arquivo/saldosetado.txt', true))) === false) {

                            var saldoSetado = parseFloat(pap.getPapel('saldoSetado/arquivo/saldosetado.txt', true)) + parseFloat(pap.getPapel('saldoSomativo.txt', true))

                            pap.postPapel('saldoEmPapel.txt', (saldoSetado).toString()) // saldoEmPapel = saldoSetado


                            setTimeout(() => {
                                pap.postPapel('saldoSetado/arquivo/saldosetado.txt', `SALDO ATUALIZADO - ${new Date()}`) // saldoSetado = "21/08/2022"
                            }, 2000)


                            setTimeout(() => {
                                pap.enviaGit()
                            }, 4000)
                        } 
                        
                        else {
                            var saldoReal = parseFloat(pap.getPapel('saldoEmPapel.txt', true)) + parseFloat(pap.getPapel('saldoSomativo.txt', true))
                            pap.postPapel('saldoEmPapel.txt', (saldoReal).toString())
                        }
                    }, 10000)
                    


                    setTimeout(() => {
                        pap.postPapel('saldoSomativo.txt', '0')
                    }, 12000)


                    setTimeout(() => {
                        console.log('Re executa CONFIRMADO 2')
                            
                        pap.postPapel('jogoFuncionando.txt', '0')
                        pap.postPapel('CWG.txt', 'D')
                        
                        setTimeout(() => {
                            try {
                                exec(`forever start -m 1 -o ./loggerBlazeReseta-out.log -e ./loggerBlazeReseta-err.log -c "node Example/resetaCmd.js" ./`, (error, stdout, stderr) => {
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
                        }, 5000)
                    
                    
                    //resCmd.restaCmd()
                    }, 30000)
                } 
                
                else {
                    var travou = parseInt(pap.getPapel('travou.txt', true)) + 1
                    pap.postPapel('travou.txt', (travou).toString)
                }
            }

            pap.postPapel('jogoFuncionando.txt', '1')
            pap.postPapel('CWG.txt', 'D')
            reseta = false
        }, 1000)
    }, 1000)
            
}, 600000)

pap.postPapel('travou.txt', '0')
pap.postPapel('CWG.txt', 'D')
pap.postPapel('resetaEmExecucao.txt', '3')





