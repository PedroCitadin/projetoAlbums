const express = require('express')
const app = express()
const PORTA = 8080 || process.env.PORT
const insereAlbum = require('./src/api/routes/insere.js')
const listaAlbum = require('./src/api/routes/busca.js')
app.use(express.urlencoded({extended: true}))

app.use("/inserir", express.static('./src/html/index.html'))

app.use("/insere", insereAlbum)
app.use("/listaAlbuns", listaAlbum)
app.listen(PORTA, function(){
    console.log(PORTA)
})