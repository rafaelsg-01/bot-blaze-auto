





var dicVar = require('./variavel.js')
var s = require('./variavelSalve.js')

var pap = require('./papel.js')








function resetaVariavel() {

    dicVar.saldoReal += dicVar.saldo
    pap.postPapel('saldoEmPapel.txt', (dicVar.saldoReal).toString())

    var facilita_Aposta = parseFloat((1.8 * dicVar.saldoReal / 450).toFixed(2)) /// 4.57
        
    dicVar.listaUltimos20Itens = []

    dicVar.listaUltimos20GanhouEperdeu = []

    dicVar.posVerdeX = s.posVerdeX
    dicVar.posVerdeY = s.posVerdeY

    dicVar.ganhouAgora = false

    dicVar.qntListaItens = s.qntListaItens // lista de multiplos e de ganhou e perdeu

    dicVar.aposta = facilita_Aposta           //////
    dicVar.queroLucro = (3*dicVar.aposta)/2        //////

    dicVar.divida = 0

    dicVar.apostaFeita = 0

    dicVar.minutosPassados = 0

    dicVar.primeiraEscolha = true

    dicVar.perdi = 0
    dicVar.ganhei = 0

    dicVar.saldo = 0

    dicVar.lucroApostaAtual = 0

    dicVar.qnt70 = 0

    dicVar.metaReais = facilita_Aposta * 10      /////
    dicVar.tempoProposto = s.tempoProposto

    dicVar.metaAlcancada = false
    dicVar.mostraJogo = true

    dicVar.maxMultiploNecessario = s.maxMultiploNecessario

    dicVar.largura = s.largura
    dicVar.altura = s.altura
    dicVar.posicaoInicial_x = 0
    dicVar.posicaoInicial_y = 0

    dicVar.sairDaAposta = ''

    dicVar.multiploEscolhidoE = 0

    dicVar.menorQueDois = false

    dicVar.itensMinimos = s.itensMinimos
    
    dicVar.testeTT = '000'

    dicVar.time_VerificaSocket = ''

    dicVar.socketFuncionando = true

    dicVar.lista_PrintAtual = []

    dicVar.jogoTaRolando = false

    dicVar.local_Pixel_Ganhou_X = s.local_Pixel_Ganhou_X
    dicVar.local_Pixel_Ganhou_Y = s.local_Pixel_Ganhou_Y
    dicVar.cor_Pixel_Ganhou = s.cor_Pixel_Ganhou

    dicVar.local_Pixel_Cmd_X = s.local_Pixel_Cmd_X
    dicVar.local_Pixel_Cmd_Y = s.local_Pixel_Cmd_Y

    dicVar.local_Pixel_Navegador_X = s.local_Pixel_Navegador_X
    dicVar.local_Pixel_Navegador_Y = s.local_Pixel_Navegador_Y
    
    dicVar.local_Caixa_Quantidade_Pixel_1_X = s.local_Caixa_Quantidade_Pixel_1_X
    dicVar.local_Caixa_Quantidade_Pixel_1_Y = s.local_Caixa_Quantidade_Pixel_1_Y
    dicVar.local_Caixa_Quantidade_Pixel_2_X = s.local_Caixa_Quantidade_Pixel_2_X
    dicVar.local_Caixa_Quantidade_Pixel_2_Y = s.local_Caixa_Quantidade_Pixel_2_Y
    
    dicVar.local_Caixa_AutoRetirar_Pixel_1_X = s.local_Caixa_AutoRetirar_Pixel_1_X
    dicVar.local_Caixa_AutoRetirar_Pixel_1_Y = s.local_Caixa_AutoRetirar_Pixel_1_Y
    dicVar.local_Caixa_AutoRetirar_Pixel_2_X = s.local_Caixa_AutoRetirar_Pixel_2_X
    dicVar.local_Caixa_AutoRetirar_Pixel_2_Y = s.local_Caixa_AutoRetirar_Pixel_2_Y
    
    dicVar.local_Caixa_Botao_Pixel_1_X = s.local_Caixa_Botao_Pixel_1_X
    dicVar.local_Caixa_Botao_Pixel_1_Y = s.local_Caixa_Botao_Pixel_1_Y
    dicVar.local_Caixa_Botao_Pixel_2_X = s.local_Caixa_Botao_Pixel_2_X
    dicVar.local_Caixa_Botao_Pixel_2_Y = s.local_Caixa_Botao_Pixel_2_Y
    
    dicVar.local_Pixel_BlazeAberta_X = s.local_Pixel_BlazeAberta_X
    dicVar.local_Pixel_BlazeAberta_Y = s.local_Pixel_BlazeAberta_Y
    
    dicVar.cor_Pixel_BlazeAberta = s.cor_Pixel_BlazeAberta

    dicVar.local_Pixel_BotaoEncima_X = s.local_Pixel_BotaoEncima_X
    dicVar.local_Pixel_BotaoEncima_Y = s.local_Pixel_BotaoEncima_Y
    dicVar.cor_Pixel_BotaoEncima = s.cor_Pixel_BotaoEncima
    dicVar.cor_Pixel_BotaoEncima_Block = s.cor_Pixel_BotaoEncima_Block
}



module.exports = {
    resetaVariavel
}