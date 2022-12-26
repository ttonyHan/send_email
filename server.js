//npm install express --save
// npm install ejs --save

const express = require('express');
const app = express();

const server = app.listen(3004,() =>{
    console.log('Start Server : localhost:3004');
});

//Cannot GET /

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

app.get('/', function(req,res) {
    res.send('hello,world')
})

app.get('/home',function(req,res) {
    res.render('index.html')
})

app.get('/about',function(req,res){
    res.send("about page")
})