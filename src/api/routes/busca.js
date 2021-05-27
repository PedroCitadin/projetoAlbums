const express = require('express')
const route = express.Router()
const albums =  require("../model/Albuns.js")
route.use(express.urlencoded({ extended: true }))

route.get('/', async function (req, res) {
   if(req.query.id==null){
    let docs = await albums.find()
    res.json(docs)
   }else{
    let docs = await albums.findById(req.query.id)
    res.json(docs)
   }

})

module.exports = route