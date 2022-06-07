const express = require('express')
const app = express()
// const mysql = require('mysql2')
const cors = require('cors');

// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'CRUDDatabase'
// })
app.listen(3001, () => {
    console.log("Server runniong on port 3001")
})

app.use(express.json({ limit: '1mb' }));
app.use(cors());

app.post('/sign-up', (req, res) => {
    console.log("I got the request")
    console.log(req.body)
})


