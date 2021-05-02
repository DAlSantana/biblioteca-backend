var mysql = require("mysql");


var conexao = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:'root',
    password:'root',
    database: "biblioteca",
});

module.exports = conexao;


