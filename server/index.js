const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'loginsystem'
    // database: 'CRUDDatabase'
})
app.listen(3001, () => {
    console.log("Server runniong on port 3001")
})

app.use(express.json({ limit: '1mb' }));
app.use(cors());

app.post('/sign-up', (req, res) => {

    console.log("I got the request")

    const username = req.body.nameReg
    const email = req.body.emailReg
    const password = req.body.passwordReg 

    db.query(
        "INSERT INTO users (username, email, password) VALUES (?,?,?)", 
        [username, email, password],
        (err, result) => {
            console.log(err)
            console.log("transfer to database successful")
        }
    );

})

app.post('/sign-in', (request, response) => {
    
    const email = request.body.loginEmail
    const password = request.body.loginPassword

    db.query(
        "SELECT * FROM users WHERE email = ? AND password = ?", 
        [email, password],
        (err, result) => {
            if(err){
                response.send({err: err})
            }

            if (result.length > 0){
                response.send(result)
            } else{
                response.send({message: "Wrong username/password combination"})
            }
        
            
        }
    );
})


