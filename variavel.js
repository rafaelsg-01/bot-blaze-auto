


var s = require('./variavelSalve.js')




var listaUltimos20Itens = s.SlistaUltimos20Itens

var listaUltimos20GanhouEperdeu = s.listaUltimos20GanhouEperdeu

var posVerdeX = s.posVerdeX
var posVerdeY = s.posVerdeY

var ganhouAgora = s.ganhouAgora

var qntListaItens = s.qntListaItens // lista de multiplos e de ganhou e perdeu

var queroLucro = s.queroLucro
var aposta = s.aposta

var divida = s.divida

var apostaFeita = s.apostaFeita

var minutosPassados = s.minutosPassados

var primeiraEscolha = s.primeiraEscolha

var perdi = s.perdi
var ganhei = s.ganhei

var saldo = s.saldo

var lucroApostaAtual = s.lucroApostaAtual

var qnt70 = s.qnt70

var metaReais = s.metaReais
var tempoProposto = s.tempoProposto

var metaAlcancada = s.metaAlcancada
var mostraJogo = s.mostraJogo

var maxMultiploNecessario = s.maxMultiploNecessario

var largura = s.largura
var altura = s.altura
var posicaoInicial_x = s.posicaoInicial_x
var posicaoInicial_y = s.posicaoInicial_y

var sairDaAposta = s.sairDaAposta

var multiploEscolhidoE = s.multiploEscolhidoE

var menorQueDois = s.menorQueDois

var itensMinimos = s.itensMinimos
 
var testeTT = s.testeTT

var time_VerificaSocket = s.time_VerificaSocket

var socketFuncionando = s.socketFuncionando

var lista_PrintAtual = s.lista_PrintAtual

var saldoReal = s.saldoReal



var inicial_saldoReal = s.inicial_saldoReal
var inicial_aposta = s.inicial_aposta
var inicial_metaReais = s.inicial_metaReais


var jogoTaRolando = s.jogoTaRolando

var local_Pixel_Ganhou_X = s.local_Pixel_Ganhou_X
var local_Pixel_Ganhou_Y = s.local_Pixel_Ganhou_Y
var cor_Pixel_Ganhou = s.cor_Pixel_Ganhou

var local_Pixel_Cmd_X = s.local_Pixel_Cmd_X
var local_Pixel_Cmd_Y = s.local_Pixel_Cmd_Y

var local_Pixel_Navegador_X = s.local_Pixel_Navegador_X
var local_Pixel_Navegador_Y = s.local_Pixel_Navegador_Y

var local_Caixa_Quantidade_Pixel_1_X = s.local_Caixa_Quantidade_Pixel_1_X
var local_Caixa_Quantidade_Pixel_1_Y = s.local_Caixa_Quantidade_Pixel_1_Y
var local_Caixa_Quantidade_Pixel_2_X = s.local_Caixa_Quantidade_Pixel_2_X
var local_Caixa_Quantidade_Pixel_2_Y = s.local_Caixa_Quantidade_Pixel_2_Y

var local_Caixa_AutoRetirar_Pixel_1_X = s.local_Caixa_AutoRetirar_Pixel_1_X
var local_Caixa_AutoRetirar_Pixel_1_Y = s.local_Caixa_AutoRetirar_Pixel_1_Y
var local_Caixa_AutoRetirar_Pixel_2_X = s.local_Caixa_AutoRetirar_Pixel_2_X
var local_Caixa_AutoRetirar_Pixel_2_Y = s.local_Caixa_AutoRetirar_Pixel_2_Y

var local_Caixa_Botao_Pixel_1_X = s.local_Caixa_Botao_Pixel_1_X
var local_Caixa_Botao_Pixel_1_Y = s.local_Caixa_Botao_Pixel_1_Y
var local_Caixa_Botao_Pixel_2_X = s.local_Caixa_Botao_Pixel_2_X
var local_Caixa_Botao_Pixel_2_Y = s.local_Caixa_Botao_Pixel_2_Y

var local_Pixel_BlazeAberta_X = s.local_Pixel_BlazeAberta_X
var local_Pixel_BlazeAberta_Y = s.local_Pixel_BlazeAberta_Y

var cor_Pixel_BlazeAberta = s.cor_Pixel_BlazeAberta

var inicial_queroLucro = s.inicial_queroLucro

var local_Pixel_BotaoEncima_X = s.local_Pixel_BotaoEncima_X
var local_Pixel_BotaoEncima_Y = s.local_Pixel_BotaoEncima_Y
var cor_Pixel_BotaoEncima = s.cor_Pixel_BotaoEncima
var cor_Pixel_BotaoEncima_Block = s.cor_Pixel_BotaoEncima_Block



module.exports = {
    listaUltimos20Itens,
    listaUltimos20GanhouEperdeu,
    posVerdeX,
    posVerdeY,
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