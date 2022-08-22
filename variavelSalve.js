
var pap = require('./papel.js')
var robot = require("robotjs")






var procurar_Pixel_E_Cor = false

var n = 1
function procura_Pixel_E_Cor() {
    var constagemMouse = 1
    var constagemMouseAte = 5
    setInterval(() => {
        if (constagemMouse <= constagemMouseAte) {
            console.log(constagemMouse)
        }
        constagemMouse++

        if (constagemMouse > constagemMouseAte+1) {
            console.log(n + '° - Localização do mouse = ' + robot.getMousePos().x + ', ' + robot.getMousePos().y + ' | Cor do Pixel = ' + robot.getPixelColor(robot.getMousePos().x, robot.getMousePos().y))
            console.log('')
            n++
            constagemMouse = 1
            constagemMouseAte = 5
        }
    }, 1000);
} ; if (procurar_Pixel_E_Cor === true) {procura_Pixel_E_Cor()}





// localização pixeis:

    // Localização pixel GANHOU "pixel verde"
    var local_Pixel_Ganhou_X = 1079
    var local_Pixel_Ganhou_Y = 247
    var cor_Pixel_Ganhou = '04d47c'


    // Localização CMD "qualquer local do preto no CMD"
        var local_Pixel_Cmd_X = 598
        var local_Pixel_Cmd_Y = 307


    // Localização ponto neutro do NAVEGADOR nova aba "ponto neutro"
        var local_Pixel_Navegador_X = 792
        var local_Pixel_Navegador_Y = 279


    // Localização caixa de QUANTIDADE "dois pixeis"
        var local_Caixa_Quantidade_Pixel_1_X = 759
        var local_Caixa_Quantidade_Pixel_1_Y = 517
        var local_Caixa_Quantidade_Pixel_2_X = 991
        var local_Caixa_Quantidade_Pixel_2_Y = 526


    // Localização caixa de AUTO RETIRAR "dois pixeis"
        var local_Caixa_AutoRetirar_Pixel_1_X = 740
        var local_Caixa_AutoRetirar_Pixel_1_Y = 564
        var local_Caixa_AutoRetirar_Pixel_2_X = 1246
        var local_Caixa_AutoRetirar_Pixel_2_Y = 585

        
    // Localização caixa de BOTÃO "dois pixeis"
        var local_Caixa_Botao_Pixel_1_X = 773
        var local_Caixa_Botao_Pixel_1_Y = 468
        var local_Caixa_Botao_Pixel_2_X = 1297
        var local_Caixa_Botao_Pixel_2_Y = 472


    // Localização pixel Blaze aberta "vermelho do depositar"
        var local_Pixel_BlazeAberta_X = 1281
        var local_Pixel_BlazeAberta_Y = 131
        var cor_Pixel_BlazeAberta = 'f12c4c'


    // Localização pixel MOUSE ENCIMA botão "mouse encima do botão"
    var local_Pixel_BotaoEncima_X = 1182
    var local_Pixel_BotaoEncima_Y = 462
    var cor_Pixel_BotaoEncima = 'cc2843'
    var cor_Pixel_BotaoEncima_Block = '4f2534'





        

















// 1.8 * 930 / 450
var saldoReal = parseFloat(pap.getPapel('saldoEmPapel.txt', true))

var facilita_Aposta = 1.7//parseFloat((1.8 * saldoReal / 450).toFixed(2)) /// 4.57


var aposta = facilita_Aposta // Altera Universal
var queroLucro = (3*aposta)/2 // Altera Universal

var metaReais = facilita_Aposta * 10 // Altera Universal





var qntListaItens = 20 // Altera Universal
var tempoProposto = 2.4 // Altera Universal

var maxMultiploNecessario = 70 // Altera Universal

var largura = 2 // Altera Universal
var altura = 2 // Altera Universal

var itensMinimos = 7 // Altera Universal




var SlistaUltimos20Itens = []

var listaUltimos20GanhouEperdeu = []

var ganhouAgora = false

var divida = 0

var apostaFeita = 0 

var minutosPassados = 0

var primeiraEscolha = true

var perdi = 0
var ganhei = 0

var saldo = 0

var lucroApostaAtual = 0

var qnt70 = 0

var metaAlcancada = false
var mostraJogo = true
var posicaoInicial_x = 0
var posicaoInicial_y = 0

var sairDaAposta = ''

var multiploEscolhidoE = 0

var menorQueDois = false

var testeTT = '000'

var time_VerificaSocket = ''

var socketFuncionando = true

var lista_PrintAtual = []


var inicial_saldoReal = saldoReal
var inicial_aposta = aposta // Altera Universal
var inicial_queroLucro = queroLucro // Altera Universal
var inicial_metaReais = metaReais // Altera Universal

var jogoTaRolando = false


module.exports = {
    SlistaUltimos20Itens,
    listaUltimos20GanhouEperdeu,
    ganhouAgora,
    qntListaItens,
    queroLucro,
    aposta,
    divida,
    apostaFeita,
    minutosPassados,
    primeiraEscolha,
    perdi,
    ganhei,
    saldo,
    lucroApostaAtual,
    qnt70,
    metaReais,
    tempoProposto,
    metaAlcancada,
    mostraJogo,
    maxMultiploNecessario,
    largura,
    altura,
    posicaoInicial_x,
    posicaoInicial_y,
    sairDaAposta,
    multiploEscolhidoE,
    menorQueDois,
    itensMinimos,
    testeTT,
    time_VerificaSocket,
    socketFuncionando,
    lista_PrintAtual,
    saldoReal,
    inicial_saldoReal,
    inicial_aposta,
    inicial_metaReais,
    jogoTaRolando,
    local_Pixel_Ganhou_X,
    local_Pixel_Ganhou_Y,
    cor_Pixel_Ganhou,
    local_Pixel_Cmd_X,
    local_Pixel_Cmd_Y,
    local_Pixel_Navegador_X,
    local_Pixel_Navegador_Y,
    local_Caixa_Quantidade_Pixel_1_X,
    local_Caixa_Quantidade_Pixel_1_Y,
    local_Caixa_Quantidade_Pixel_2_X,
    local_Caixa_Quantidade_Pixel_2_Y,
    local_Caixa_AutoRetirar_Pixel_1_X,
    local_Caixa_AutoRetirar_Pixel_1_Y,
    local_Caixa_AutoRetirar_Pixel_2_X,
    local_Caixa_AutoRetirar_Pixel_2_Y,
    local_Caixa_Botao_Pixel_1_X,
    local_Caixa_Botao_Pixel_1_Y,
    local_Caixa_Botao_Pixel_2_X,
    local_Caixa_Botao_Pixel_2_Y,
    local_Pixel_BlazeAberta_X,
    local_Pixel_BlazeAberta_Y,
    cor_Pixel_BlazeAberta,
    inicial_queroLucro,
    local_Pixel_BotaoEncima_X,
    local_Pixel_BotaoEncima_Y,
    cor_Pixel_BotaoEncima,
    cor_Pixel_BotaoEncima_Block
}