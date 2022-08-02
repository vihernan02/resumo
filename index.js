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
    mongoose.connect('mongodb+srv://userRevisao:revisao1234@fiaptecnico.xtl46.mongodb.net/?retryWrites=true&w=majority')
}

/*configuração do banco de dados - fim*/

/*rota para requisição*/
app.get('/',(req,res)=>{
    conexao()
    //res.send('Funcionando')
    res.render('index.ejs',{nome:"Alunos Feiosos",turma:"2EMIA",disciplina:"LP2"})
})
