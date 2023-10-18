const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    user: "root",
    host:"localhost",
    password:"",
    database:"spacedb"
})

app.get('/users', (req, res)=>{
    db.query("SELECT * FROM users",(err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});


app.post('/login',(req,res)=>{
    const sql ="SELECT * FROM users WHERE email = ? AND password = ?";

    db.query(sql,[req.body.email, req.body.password],(err, data)=>{
        if(err) return res.json("Error");
        if(data.length > 0){
            return res.json("Login Successfully")
            
        }else{
            return res.json("No record")
            
        }
    })
})


//     // ของจริง
// app.post('/register', async (req, res)=>{


//     const name = req.body.name.toString();
//     const email = req.body.email.toString();
//     const password = req.body.password.toString();

    

//     db.query(`INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`),
//     (err, result) => {
//         if(err){
//             return res.json("Error");
//         }else{
//             return res.json(result);
//         }

        
//     };
// });
// // ของจริง

app.post('/register',(req,res)=> {
    const sql = "INSERT INTO users (`name`,`email`,`password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]

    db.query(sql,[values],(err, data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
}
)


app.listen('3001', ()=>{
    console.log('Server is runing on port 3001'); 
})