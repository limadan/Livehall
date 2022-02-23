const express = require('express');
const port = 8000;
const app = express();
const db = require('./conexao.js')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.listen(port, ()=>{
    console.log("Servidor rodando!")
})

app.get('/streams', (req, res, next)=>{
    const sql = "SELECT * FROM stream";
    db.all(sql, [], (err, result)=>{
        if(err) return console.log(err);
        res.send(result);
    })  
})


app.get('/streams/:id', (req, res, next)=>{
    const sql = "SELECT * FROM stream WHERE idStreamer = " + req.params.id.toString();
    db.all(sql, [], (err, result)=>{
        if(err) return console.log(err);
        res.send(result);
    })  
})

app.post('/streams', (req, res, next)=>{
    const sql = "INSERT INTO stream(idStreamer, link, nome_conteudo) VALUES (?,?,?)";
    db.run(sql, Object.values(req.body), (err)=>{
        if(err) return console.log(err)
        res.send("Stream divulgada com sucesso")
    })    

})

app.get('/users/:username', (req, res, next)=>{
    const sql = "SELECT * FROM usuario WHERE username = (?)";
    db.all(sql, [req.params.username.toString()], (err, result)=>{
        if(err) return console.log(err);
            res.send(result);
    })

   
})

app.post("/users", (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    const sql = "INSERT INTO usuario(username,senha, email,genero, nome) VALUES(?,?,?,?,?)";
    db.run(sql, Object.values(req.body), (err)=>{
        if(err) return console.log(err)
        res.send("Usuário cadastrado com sucesso")
    })    
})

app.put("/users/:id", (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    const sql = "UPDATE usuario SET username = ?, senha = ?, email = ?, nome= ? WHERE id = " + req.params.id.toString();
    db.run(sql, Object.values(req.body), (err)=>{
        if(err) console.log(err)
        res.send(req.body)
    })    
}) //Editando dados principais

app.put("/users/bio/:id", (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    const sql = "UPDATE usuario SET biografia = ? WHERE id = " + req.params.id.toString();
    db.run(sql, Object.values(req.body), (err)=>{
        if(err) return console.log(err)
        res.send("Dados atualizados com sucesso")
    })    
}) //Editando dados secundários