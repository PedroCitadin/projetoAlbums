const mongoose = require('../data/index.js')

let albumSchema = new mongoose.Schema({
    nome: String,
    artista : String,
    ano: Number,
    generos: Array,
    faixas: Array,
    lancamento: Date
})

let album = mongoose.model('album', albumSchema)

module.exports = album