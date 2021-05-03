const Biblioteca = require('../models/biblioteca');

module.exports = (app) =>{
    app.get('/obras',(req,res)=>{
        Biblioteca.lista(res)
    });

    app.post('/obras',(req,res)=>{
        const body = req.body;
        Biblioteca.criar(res,body)
    })
}