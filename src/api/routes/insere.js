const express = require('express')
const route = express.Router()
const albums =  require("../model/Albuns.js")
route.use(express.urlencoded({ extended: true }))

route.post('/', function (req, res) {

    if (req.body==null) {
        res.send("ERRO!!!!")
    } else {
        let faixas = []
        let generos = []
        const nome = req.body.nome
        const artista = req.body.artista
        const ano = req.body.ano
        const lancamento = req.body.lancamento
        for (var i = 1; i <= req.body.totfaixa; i++) {

            faixas.push(req.body["faixas" + i])

        }
        for (var i = 1; i <= req.body.totgenero; i++) {
            generos.push(req.body["generos" + i])
        }
        
        let Album = new albums({
            nome: nome,
            artista: artista,
            ano: Number(ano),
            generos: generos,
            faixas: faixas,
            lancamento: Date.parse(lancamento)
        })
        
        Album.save()
        
        
    }
})

module.exports = route