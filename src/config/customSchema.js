const express = require('express');
const tabela = require('./tabelas');
const app = express();
const conexao = require('./sqlConnection')
const sqlConnection = require('./sqlConnection');
let porta = 3000;

module.exports = () =>{

    app.listen(porta,()=>{
        console.log(`Servidor rodando na porta ${porta}`);
    });

    sqlConnection.connect((error)=>{
        if(error){
            console.log("Erro ao conectar ao banco de dados.",error)
        }else{
            tabela.init(conexao);
        }
    })
    return app;
}
