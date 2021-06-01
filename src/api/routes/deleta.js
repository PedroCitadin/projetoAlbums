const express = require('express')
const route = express.Router()
const albums = require("../model/Albuns.js")

route.use(express.json())
route.delete('/:id', async function (req, res) {
    try {
        const id = req.params.id
        const resultado = await albums.findByIdAndDelete(id)
        res.send("Album deletado com sucesso")


    } catch (err) {
        res.send(err.message)
    }

})

module.exports = route