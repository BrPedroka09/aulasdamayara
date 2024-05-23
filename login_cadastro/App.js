const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 5000;

const db = mysql.createConnection({
    host:'localhost',
    user:'pedro',
    password: 'SENAI123',
    database: 'login'
});

db.connect((error)=>{
    if(error){
        console.log('Erro ao conectar com o MySql');
    } else{
        console.log('Conectado ao MySQL')
    }
});

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/login.html')
})

app.post("/login", (req, res)=> { 
    const username = req.body.usuario
    const password = req.body.senha
    
    db.query('SELECT password FROM user where username = ?', [username], (error, results)=>{
        if(error){
            console.log('Erro ao realizar consulta', error)
        }else{
            if (results.length > 0){
                const passwordDB = results[0].password;
                if(passwordDB == password)
                console.log('Bem-Vindo!')
    
            }else{
                console.log('Usuario não encontrado!')
            
            }
        }  
    })
})

app.listen(port, ()=>{
    console.log(`Servidor rodando no endereço: http://localhost:${port}`)
})


