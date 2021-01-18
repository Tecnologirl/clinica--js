const express = require('express')
const app = express()

var path = __dirname + /views/



app.get('/', function(req,res){
	res.sendFile(path+'index.html')
})

app.get('/registro-expediente', function(req,res){
	res.sendFile(path+'registroExpediente.html')
})

app.listen(3000)