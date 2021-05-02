const express = require('express');

const app = express();
const sqlConnection = require('./sqlConnection');
let porta = 3000;

module.exports = () =>{

    app.listen(porta,()=>{
        console.log(`Servidor rodando na porta ${porta}`);
    });

    sqlConnection.connect((error)=>{
        if(error){
            console.log("Erro ao conectar ao banco de dados.")
        }else{
            
        }
    })
    return app;
}
