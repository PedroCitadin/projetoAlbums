const mongoose = require('mongoose')
const uri = "mongodb+srv://pcitadin:jZOTYuHNNxXvTT2l@cluster0.gceg4.mongodb.net/dbalbuns?retryWrites=true&w=majority"
const opcoes = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(uri, opcoes)

mongoose.connection.on('connected', function(){
    console.log("Conexão com o banco realizada com sucesso!")
})

module.exports = mongoose