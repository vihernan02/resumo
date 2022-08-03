/*configuraçãoes do servidor*/
//carregar o modulo express
const express = require('express')
//executar modulo express
const app = express()
//criar pasta de arquivos ejs
app.set('views','./')
//criar uma instancia local
app.listen(3050,()=>{
    console.log("servidor local em http://localhost:3050")
})
/*configuraçãoes do servidor - fim*/

/*configuração do banco de dados - inicio*/
//importar o modulo mongoose
const mongoose = require('mongoose')
//configurar o script de conexão
const conexao = ()=>{
    mongoose.connect('mongodb+srv://userRevisao:revisao1234@cluster0.xtl46.mongodb.net/resumo?retryWrites=true&w=majority')
}
//configurar modelo para coleção alunos
const modelo = new mongoose.Schema({
    nome:String,
    turma:String,
    disciplina:String
})
//definir modelo para coleção alunos
const alunos = mongoose.model('alunos',modelo)
/*configuração do banco de dados - fim*/

/*rota para requisição*/
app.get('/',async(req,res)=>{
    conexao()
    //pesquisar os documentos na collection alunos
    const resultado = await alunos.find()
    //const resultado = alunos.find()
    console.log(resultado)
    //res.send('Funcionando')
    res.render('index.ejs',{resultado})
}) 
