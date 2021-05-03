class Tabelas{
    
    init(conexao){
        this.conexao = conexao;
        this.criarBiblioteca();
    }

    criarBiblioteca(){
        const sqlQuery = "CREATE TABLE IF NOT EXISTS obras (id int AUTO_INCREMENT, titulo varchar(40) NOT NULL, editora varchar(15) NOT NULL, foto text,autores text, PRIMARY KEY (id));";

        this.conexao.query(sqlQuery,(error)=>{
            if(error){
                console.log("Erro ao criar tabela de obras",error);
            }
        })
    }
}


module.exports = new Tabelas();