const express = require('express')
const route = express.Router()
const albums = require("../model/Albuns.js")

route.use(express.json())
route.put('/:id', async function (req, res) {
    try {
        const id = req.params.id
        const albody = req.body



        const resultado = await albums.findByIdAndUpdate(id, albody)
        res.send("Album alterado com sucesso")


    } catch (err) {
        res.send(err.message)
    }

})

module.exports = route