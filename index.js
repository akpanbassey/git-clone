const http = require("http");
const express = require("express");
const app = express();


app.get ("/", (req, res) =>{
    res.send('Helo World');
});
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// app.post("/", (req, res){

// })

app.post ("/", (req, res) =>{
    res.send(req.body);
});

app.delete ("/", (req, res) =>{
    res.send("am down");
});

app.listen(3000, function (){
    console.log(`app is runing`);
});
