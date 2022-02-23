const path = require('path')

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(path.resolve(__dirname, "livehall.db"), sqlite3.OPEN_READWRITE, (err=>{
    if(err){
        console.log(err)
    }else{
        console.log("Conexão com o banco realizada com sucesso.")
    }
}));

module.exports = db