const express = require('express')
const route = express.Router()
const albums =  require("../model/Albuns.js")
route.use(express.urlencoded({ extended: true }))

route.get('/', async function (req, res) {
   
    let docs = await albums.find()
    res.json(docs)
   
    

})
route.get('/:id', async function (req, res) {
   try{
      let docs = await albums.findById(req.params.id)
      res.json(docs)
   }catch(err){
      console.log(err.message)
      res.send({error : "Erro ao pesquisar album"})
   }
    
   

})
module.exports = route