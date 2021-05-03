const conexao = require("../../config/sqlConnection");

class Biblioteca {
  lista(res) {
    let sqlQuery = "SELECT * FROM obras"

    conexao.query(sqlQuery, (error, resultado) => {
      if (error) {
        console.log("Erro ao consultar o sql", error);
      } else {
        res.status(200).send(resultado);
      }
    
  })}

  criar(res, body) {
    let autores = body.autores;
    let autoresQueryValue = "";
    autores.map((autor,i)=>{
        if(i != 0){
            autoresQueryValue += `, ${autor}`;
        }else{
            autoresQueryValue += `${autor}`;
        }
    })
    let sqlQuery = `INSERT INTO obras (titulo,editora,foto,autores) VALUES (?,?,?,?)`;

    conexao.query(sqlQuery,[body.titulo,body.editora,body.foto,...body.autores], (error, resultado) => {
      if (error) {
        console.log("Erro ao consultar o sql", error);
      } else {
        res.status(200).send(body);
      }
    });
  }
}
module.exports = new Biblioteca();
