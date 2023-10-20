// reqiure basic node modules
const express=require('express');
const mongoose=('mongoose');
const cors=require('cors');
const conn=require("./db_connections/mongo_db_conn/conn")
require('dotenv').config();

// cross origin resourse sharing from diffrent domain middleware (cors) 
const app=express();
app.use(cors());
app.use(express.json());

// connect data base
conn();

// https request from front end

app.use('/user',require("./routes/user_route/user_auth.js"));
app.use('/user/injury',require("./routes/user_route/user_injury.js"));


// server connection
const PORT=process.env.port||5000;
app.listen(PORT,()=>{
    console.log(`server listen at ${PORT}`);
})