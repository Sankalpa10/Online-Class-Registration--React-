const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host : "localhost",
  user: "root",
  password : "1234",
  database:"masteredu"
})
app.post('/register'),(req,res) => {
  const sql = "INSERT INTO students ('name' , 'username' , 'email' , 'address' , 'password' , 'telenumber') Values (?)";
  const values = [
    req.body.name,
    req.body.username,
    req.body.email,
    req.body.address,
    req.body.password,
    req.body.telenumber,
  ]
  db.query(sql,[values],(err,data) => {
    if(err) return res.json(err);
    return res.json(data);
  });
}
app.post('/login',(req,res)=>{
  const sql = "SELECT * FROM students WHERE username =? AND password = ?";
  
  db.query(sql,[req.body.email,req.body.password],(err,data) => {
    if(err) return res.json("Error")
    if(data.length > 0){
      return res.json("login successfully");
} else{
  return res.json("no records");
}
    
   
})
});

const db = require('./models');

  //routers

  const postRouter = require ("./routes/Students")
  app.use("/students", postRouter)



db.sequelize.sync().then(() => {

  });
  app.listen(3001,() => {
    console.log("Server runing in port 3001");
   });

 