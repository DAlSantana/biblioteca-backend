class Tabelas{
    
    init(conexao){
        this.conexao = conexao;
        this.criarBiblioteca();
    }

    criarBiblioteca(){
        const sqlQuery = "CREATE TABLE IF NOT EXISTS biblioteca (id int AUTO_INCREMENT, titulo varchar(40) NOT NULL, editora varchar(15) NOT NULL, foto text, autores text NOT NULL, PRIMARY KEY (id) )";

        this.conexao.query(sqlQuery,(error)=>{
            if(error){
                console.log("Erro ao criar tabela de biblioteca",error);
            }
        })
    }
}


module.exports = new Tabelas();