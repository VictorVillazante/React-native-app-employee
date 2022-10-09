const express = require ('express')
const app=express();
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

require('./Employee')
app.use(bodyParser.json());

const Employee = mongoose.model("employee")
const mongoUri="mongodb+srv://bitius:8LvBgzY6dF8tSgVx@cluster0.jzri4l7.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on("connected",()=>{
    console.log("mongoose conectado")
});
mongoose.connection.on("error",(err)=>{
    console.log("Error:"+err);
})

app.post("/send",(req,res)=>{
    console.log(req.body)
    const employee=new Employee({
        "name":req.body.name,
        "position":req.body.position,
        "salary":req.body.salary,
        "picture":req.body.picture,
        "email":req.body.email,
        "phone":req.body.phone
    })
    employee.save().then((data)=>{
        console.log(data)
        res.send("success")
    }).catch((err)=>{
        res.send("Error:"+err)
    })
})

app.get("/",(req,res)=>{
    res.send("Hola de nuevo victor este es un servidor en node js")
})
app.listen(3000,()=>{
    console.log('Server running, I knew nodejs but Its for remember')
});

