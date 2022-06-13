const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'crwn_db'
    // database: 'CRUDDatabase'
})
app.listen(3001, () => {
    console.log("Server runniong on port 3001")
})

app.use(express.json({ limit: '1mb' }));
app.use(cors());

app.post('/sign-up', (req, res) => {

    console.log("I got the request")

    const username = req.body.displayName
    const email = req.body.email
    const password = req.body.password

    db.query(
        "INSERT INTO users (username, email, password) VALUES (?,?,?)", 
        [username, email, password],
        (err, result) => {
            if(err){

                if(err.code === 'ER_DUP_ENTRY'){
                    res.send({message: "Email is already in use, please use different email"})
                }

                console.log('User encountered an error', err)

            } else {

                res.send({message: "sign up successfull"})
            }

            
        }
    );

})

app.post('/sign-in', (request, response) => {
    
    const email = request.body.email
    const password = request.body.password

    db.query(
        "SELECT * FROM users WHERE email = ? AND password = ?", 
        [email, password],
        (err, result) => {
            if(err){
                response.send({err: err})
            }

            if (result.length > 0){
                response.send({message: "successfully signed in"})
            } else{
                response.send({message: "Wrong username/password combination"})
            }
        
            
        }
    );
})


