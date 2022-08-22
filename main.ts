

var dicVar = require('./variavel.js')
var dicVarS = require('./variavelSalve.js')
var gaEpe = require('./ganhouEperdeu.js')
var mult = require('./multiplo.js')
var ferr = require('./ferramentas.js')
var robot = require('robotjs')
var reVar = require('./variavelReset.js')
//var resCmd = require('./resetaCmd.js')

var pap = require('./papel.js')
//var rest = require('./reset.js')

var robot = require("robotjs")

const { exec } = require("child_process")

import { makeConnectionBlaze } from "../src"


function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms)
  }


function randomCaixa(p1x, p1y, p4x, p4y){

    var resX = ferr.random(p1x, p4x)
    var resY = ferr.random(p1y, p4y)

    var dicPosition = {x: resX, y: resY}

    return dicPosition
}

function resetaTudo() {
    pap.postPapel('jogoFuncionando.txt', '0')
    
    //reVar.resetaVariavel()
    
    sleep(1000)
    console.log('')
    console.log('Novo saldo: ' + dicVar.saldoReal.toFixed(2))
    console.log('Nova aposta: ' + dicVar.aposta.toFixed(2))
    console.log('Nova quero lucro: ' + dicVar.queroLucro.toFixed(2))
    console.log('Nova sair com: ' + dicVar.metaReais.toFixed(2))
    console.log('')


    //console.log('Iniciou')

    sleep(ferr.random(5000, 6000))
    robot.keyTap("t", "control")
    //console.log('robot.keyTap("t", "control")')
    
    sleep(ferr.random(1500, 2000))
    robot.keyTap("tab", "control")
    //console.log('"tab", "control"')

    sleep(ferr.random(1500, 2000))
    robot.keyTap("w", "control")

    sleep(ferr.random(1500, 2000))

    var ponto0 = randomCaixa(
        dicVar.local_Caixa_Quantidade_Pixel_1_X, 
        dicVar.local_Caixa_Quantidade_Pixel_1_Y, 
        dicVar.local_Caixa_Quantidade_Pixel_2_X, 
        dicVar.local_Caixa_Quantidade_Pixel_2_Y)

    robot.moveMouseSmooth(ponto0.x, ponto0.y, 2)

    sleep(ferr.random(1500, 2000))
    robot.keyTap("l", "control")

    sleep(ferr.random(1500, 2000))
    robot.typeStringDelayed("blaze.com/pt/games/crash", ferr.random(50, 70))

    sleep(ferr.random(1500, 2000))
    robot.keyTap("enter")

    sleep(ferr.random(30000, 40000))
    ferr.clickMouseComplexo(false)

    sleep(ferr.random(1500, 2000))
    robot.typeStringDelayed(dicVar.aposta, ferr.random(60, 120))


    var input_p1_x = dicVar.local_Caixa_AutoRetirar_Pixel_1_X
    var input_p1_y = dicVar.local_Caixa_AutoRetirar_Pixel_1_Y
    var input_p4_x = dicVar.local_Caixa_AutoRetirar_Pixel_2_X
    var input_p4_y = dicVar.local_Caixa_AutoRetirar_Pixel_2_Y

    var botao_p1_x = dicVar.local_Caixa_Botao_Pixel_1_X
    var botao_p1_y = dicVar.local_Caixa_Botao_Pixel_1_Y
    var botao_p4_x = dicVar.local_Caixa_Botao_Pixel_2_X
    var botao_p4_y = dicVar.local_Caixa_Botao_Pixel_2_Y


    var ponto1 = randomCaixa(input_p1_x, input_p1_y, input_p4_x, input_p4_y)
    var ponto2 = randomCaixa(botao_p1_x, botao_p1_y, botao_p4_x, botao_p4_y)
    var ponto3 = randomCaixa(botao_p1_x, botao_p1_y, botao_p4_x, botao_p4_y)
    
    sleep(ferr.random(200, 600))
    robot.moveMouseSmooth(ponto1.x, ponto1.y, 1)

    sleep(ferr.random(200, 600))
    robot.moveMouseSmooth(ponto2.x, ponto2.y, 1)

    sleep(ferr.random(200, 600))
    robot.moveMouseSmooth(ponto3.x, ponto3.y, 1)

    sleep(ferr.random(1000, 3000))
    start()

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


function start() {

    let socket = makeConnectionBlaze({
        needCloseWithCompletedSession: false,
        type: 'crash', // or 'doubles'
        requireNotRepeated: true,
    })





    // Conta 5 seg para marca a posição do mouse
    var constagemMouse = 1
    var constagemMouseAte = 5
    var printPosicaoMouse = setInterval(() => {
        if (constagemMouse <= constagemMouseAte) {
            console.log(constagemMouse)
        }
        constagemMouse++

        if (constagemMouse > constagemMouseAte+1) {
            dicVar.posicaoInicial_x = robot.getMousePos().x 
            dicVar.posicaoInicial_y = robot.getMousePos().y
            
            console.log('Localização do mouse = ' + dicVar.posicaoInicial_x + ', ' + dicVar.posicaoInicial_y)
            pap.postPapel('jogoFuncionando.txt', '1')

            clearInterval(printPosicaoMouse)

            //reseta variaveis
            
            
            sleep(1000)
            console.log('')
            console.log('Inicial saldo: ' + dicVar.inicial_saldoReal.toFixed(2))
            console.log('Inicial aposta: ' + dicVar.inicial_aposta.toFixed(2))
            console.log('Inicial quero lucro: ' + dicVar.inicial_queroLucro.toFixed(2))
            console.log('Inicial sair com: ' + dicVar.inicial_metaReais.toFixed(2))
            console.log('')
            
        }
    }, 1000);





    

    socket.ev.on('game_complete', (msg) => {
        var lista_C = pap.getPapel('CWG.txt').split(',') // ['c', 'w', 'g']

        if (lista_C.indexOf('C') === -1) {
            lista_C.push('C')

            pap.postPapel('CWG.txt', lista_C)

            lista_C = []
            //console.log('C = esta funcionando')
        }
        
        /* console.log('')
        console.log('           COMPLETE')
        console.log('') */


        
            
        //cria lista dos multiplos
        //cria lista dos ganhou ou perdeu
        if (dicVar.listaUltimos20Itens.length < dicVar.qntListaItens) {

            //multiplos
            if (parseFloat(msg.crash_point) >= 1) {
                dicVar.listaUltimos20Itens.push(parseFloat(msg.crash_point))
            } else {dicVar.listaUltimos20Itens.push(1)}

            //ganhou perdeu
            dicVar.listaUltimos20GanhouEperdeu.push(dicVar.ganhouAgora === true?'ganhou':'perdeu')
        } 
        else {

            //multiplos
            dicVar.listaUltimos20Itens.shift()
            if (parseFloat(msg.crash_point) >= 1) {
                dicVar.listaUltimos20Itens.push(parseFloat(msg.crash_point))
            } else {dicVar.listaUltimos20Itens.push(1)}
            
            //ganhou perdeu
            dicVar.listaUltimos20GanhouEperdeu.shift()
            dicVar.listaUltimos20GanhouEperdeu.push(dicVar.ganhouAgora === true?'ganhou':'perdeu')
        }


        //console.log(dicVar.listaUltimos20Itens)
        /* console.log(dicVar.listaUltimos20Itens)
        console.log('')
        console.log(dicVar.listaUltimos20GanhouEperdeu) */





        if (dicVar.listaUltimos20Itens.length >= dicVar.itensMinimos) {

            var ultimoItem = dicVar.listaUltimos20Itens.length-1

            var i1 = dicVar.listaUltimos20Itens[ultimoItem - 0]
            var i2 = dicVar.listaUltimos20Itens[ultimoItem - 1]
            var i3 = dicVar.listaUltimos20Itens[ultimoItem - 2]
            var i4 = dicVar.listaUltimos20Itens[ultimoItem - 3]
            var i5 = dicVar.listaUltimos20Itens[ultimoItem - 4]
            var i6 = dicVar.listaUltimos20Itens[ultimoItem - 5]
            var i7 = dicVar.listaUltimos20Itens[ultimoItem - 6]
            // i1 <= 1.99 && i2 <= 1.99 && i3 <= 1.99 && i4 <= 1.99 && i5 <= 1.99 && i6 <= 1.99 && i7 <= 1.99
            //console.log(i1) ; console.log(i2)

            if ((i1 <= 1.99 && i2 <= 1.99 && i3 <= 1.99 && i4 <= 1.99 && i5 <= 1.99 && i6 <= 1.99 && i7 <= 1.99) || dicVar.menorQueDois === true) {
                dicVar.menorQueDois = true

                //Para o SetInterval do verifica verde
                if (dicVar.ganhouAgora === true) {
                    clearTimeout(dicVar.sairDaAposta)

                    gaEpe.stopIntervalVerifVerde()
                    //console.log('Ganhei ++++++++++++++++')
                } 
                else {
                    clearTimeout(dicVar.sairDaAposta)

                    //cancela click para sair da aposta
                    //console.log('CANCELA APOSTA')

                    gaEpe.stopIntervalVerifVerde()
                    //console.log('Perdeu ----------------')
                }
            }
        }
    })




    socket.ev.on('game_waiting', (msg) => {
        var lista_W = pap.getPapel('CWG.txt').split(',') // ['c', 'w', 'g']

        if (lista_W.indexOf('W') === -1) {
            lista_W.push('W')
            pap.postPapel('CWG.txt', lista_W)
            lista_W = []
            //console.log('C = esta funcionando')
        }

        /* console.log('')
        console.log('           WAITING')
        console.log('') */


        if (dicVar.menorQueDois === true) {

            dicVar.multiploEscolhidoE = mult.escolheMultiplo()
            
            setTimeout(() => {
                if (dicVar.metaAlcancada !== true) {
                    clearTimeout(dicVar.sairDaAposta)
                    console.log('   Click = APOSTA FEITA')
                    ferr.clickMouseComplexo(true)

                    dicVar.apostaFeita++
                }
                else {
                    pap.postPapel('jogoFuncionando.txt', '0')

                    clearTimeout(dicVar.sairDaAposta)
                    gaEpe.stopIntervalVerifVerde()

                    socket.ev.removeAllListeners("game_graphing")
                    socket.ev.removeAllListeners("game_complete")
                    socket.ev.removeAllListeners("game_waiting")
                    socket.closeSocket()
                    console.log(new Date())
                    console.log('FIM DO CICLO')

                    // ctrol + t
                    // ctrol + tab
                    // crtol + w
                    // mover o mouse ate 511, 337
                    // ctrol + e
                    // digita: "blaze.com/pt/games/crash" e aperta enter
                    // aguarda 10 segundos
                    // click 100% aleatorio
                    // segura shift e aperta tab 3 vezes
                    // digita o valor da aposta "1.8"
                    // desce o mouse ate a caixa de seleção p1 = 366, 411 e p2 = 579, 423
                    // executa o comando "npm run example"




                    setTimeout(() => {
                        console.log('Re executa 1')
                        
                        //reVar.resetaVariavel()

                        if (pap.getPapel('resetaEmExecucao.txt') !== '1' || parseInt(pap.getPapel('travou.txt', true)) >=3) {
                            pap.postPapel('resetaEmExecucao.txt', '1')

                            console.log('Re executa CONFIRMADO 1')


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
                            }, 30000)
                        } 
                        
                        else {
                            var travouVV = parseInt(pap.getPapel('travou.txt', true)) + 1
                            pap.postPapel('travou.txt', (travouVV).toString)
                        }

                        //resCmd.restaCmd()
                        sleep(2500)
                    }, 15000)

                }
            }, ferr.random(450, 100))


            setTimeout(() => {
                if (dicVar.metaAlcancada !== true) {
                    //Inicia verificação do verde
                    dicVar.ganhouAgora = false
                    gaEpe.setIntervalVerifVerde()
                }
            }, 3500)

            
            pap.postPapel('saldoSomativo.txt', dicVar.saldo.toFixed(2))
            //console.log('Retirada tempo anterior = ' + ((Math.log(dicVar.multiploEscolhidoE) / Math.log(1.0618287))*1000).toFixed(0))
        }
    })







    socket.ev.on('game_graphing', (msg) => {
        var lista_G = pap.getPapel('CWG.txt').split(',') // ['c', 'w', 'g']

        if (lista_G.indexOf('G') === -1) {
            lista_G.push('G')
            pap.postPapel('CWG.txt', lista_G)
            lista_G = []
            //console.log('C = esta funcionando')
        }
        
        /* console.log('')
        console.log('           GRAPHING')
        console.log('') */

        if (dicVar.menorQueDois === true) { // 2


            var iguais = dicVar.multiploEscolhidoE // 2
            var maior = dicVar.multiploEscolhidoE //+ (dicVar.multiploEscolhidoE/2) // 3
            var menor = dicVar.multiploEscolhidoE //- (dicVar.multiploEscolhidoE/2) // 1

            var minMultiploEscolhidoE = dicVar.multiploEscolhidoE*100 - ferr.random(iguais, maior) // 198  197
            var maxMultiploEscolhidoE = dicVar.multiploEscolhidoE*100 - ferr.random(menor, iguais) // 199  198

            var valorFinalEscolhiAqui = ferr.random(minMultiploEscolhidoE, maxMultiploEscolhidoE)/100 // 1.98

            var retiradaFuturaMs = ((Math.log(valorFinalEscolhiAqui) / Math.log(1.0618287))*1000)


            //console.log('Tempo para a retirada = ' + retiradaFuturaMs.toFixed(0))


            dicVar.sairDaAposta = setTimeout(() => {
                ferr.clickMouse(true)
                console.log('   Click = RETIRADA DE GANHOS')
            }, retiradaFuturaMs)
        }
    })
}

pap.postPapel('jogoFuncionando.txt', '0')
pap.postPapel('saldoSomativo.txt', '0')
resetaTudo()



export { start }