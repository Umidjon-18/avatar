const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
    res.render('avatar');
})


const port = process.env.port || 4000;
app.listen(port, ()=>{
    console.log('Server ishga tushdi');
})