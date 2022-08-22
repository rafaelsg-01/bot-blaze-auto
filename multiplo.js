















var dicVar = require('./variavel.js')






function escolheMultiplo() {

    if (dicVar.primeiraEscolha === true) {
        dicVar.primeiraEscolha = false
        return (dicVar.queroLucro/dicVar.aposta) + 1 
    }
    var multiploAtual = dicVar.listaUltimos20Itens[dicVar.listaUltimos20Itens.length-1] //1.16x

    var ultimoResultado = dicVar.listaUltimos20GanhouEperdeu[dicVar.listaUltimos20GanhouEperdeu.length-1] //perdi

    var multiploNecessario = (((dicVar.queroLucro/dicVar.aposta) + 1) + dicVar.divida) //16x
    //console.log(multiploAtual)
    

    dicVar.minutosPassados = dicVar.apostaFeita * 0.4

    //Faz aposta

    //Qual multiplo devo tentar alcançar?


    if (ultimoResultado === 'ganhou'){
        // Ganhei
        dicVar.ganhei++
        dicVar.lucroApostaAtual = (multiploNecessario * dicVar.aposta) - dicVar.aposta

        dicVar.saldo += dicVar.lucroApostaAtual // = 32   ---> 130
        dicVar.divida = 0
    } 
    
    else if (ultimoResultado === 'perdeu') {
        // Perdi
        dicVar.perdi++
        dicVar.lucroApostaAtual = - dicVar.aposta

        dicVar.saldo += dicVar.lucroApostaAtual // = -2   --> 98

        if (dicVar.divida <= dicVar.maxMultiploNecessario-3) {
            dicVar.divida++ // = 1   --> 1
        } else {dicVar.qnt70++}

    }

    if (dicVar.saldo >= dicVar.metaReais || (dicVar.minutosPassados >= dicVar.tempoProposto && dicVar.divida <= 0)){
        dicVar.metaAlcancada = true
    }
    

    if (dicVar.mostraJogo === true){
        console.log(``)
        if (dicVar.minutosPassados >= dicVar.tempoProposto){console.log(111111111)}
        console.log(`   N° ${dicVar.apostaFeita} - Aposta feita = ${dicVar.aposta.toFixed(2)} - ${ultimoResultado==='ganhou'?'Ganhei':'Perdi'}`)
        console.log(`   Lucro = ${dicVar.lucroApostaAtual.toFixed(2)} - Mult.Atual = ${multiploAtual.toFixed(2)} - Mult.Neces = ${multiploNecessario.toFixed(2)} - Acabou de contrair uma divida = ${dicVar.divida}`)
        console.log(`   Saldo atual = ${dicVar.saldo.toFixed(2)}`)
        console.log(``)
    }

    multiploNecessario = (((dicVar.queroLucro/dicVar.aposta) + 1) + dicVar.divida) //16x
    
    return multiploNecessario
}






module.exports = {
    escolheMultiplo
}