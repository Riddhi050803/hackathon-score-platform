const express = require('express');
const app = express();
const cors = require("cors");

if(process.env.NODE_ENV !== "production"){
    require("dotenv").config({path: "./config/config.env"});
}

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const judgeAuth = require('./routes/judgeAuth');
app.use('/auth', judgeAuth);

const adminAuth = require('./routes/adminAuth');
app.use('/admin', adminAuth);

module.exports = app;