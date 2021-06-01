const express = require('express')
const app = express()
const PORTA = process.env.PORT || 8080 
const insereAlbum = require('./src/api/routes/insere.js')
const alteraAlbum = require('./src/api/routes/altera.js')
const deletaAlbum = require('./src/api/routes/deleta.js')
const listaAlbum = require('./src/api/routes/busca.js')
app.use(express.urlencoded({extended: true}))

app.use("/inserir", express.static('./src/html/index.html'))

app.use("/insere", insereAlbum)
app.use("/altera", alteraAlbum)
app.use("/deletar", deletaAlbum)
app.use("/listaAlbuns", listaAlbum)
app.listen(PORTA, function(){
    console.log(PORTA)
})