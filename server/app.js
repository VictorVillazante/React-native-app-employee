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
        res.send(data)
    }).catch((err)=>{
        res.send("Error:"+err)
    })
})

app.get("/",(req,res)=>{
    Employee.find({})
    .then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send("Error:"+err)
    });
})
app.delete("/delete/:id",(req,res,next)=>{
    var id=req.params.id;
    Employee.findByIdAndRemove(id)
    .then(data=>{
        res.send(data);
    }).catch((err)=>{
        res.send("Error:"+err)
    });
    
    res.send("deleted "+id);
})

app.put("/update/:id",(req,res,next)=>{
    var id=req.params.id;
    Employee.findByIdAndUpdate(id,{
        name:req.body.name,
        position:req.body.position,
        salary:req.body.salary,
        picture:req.body.picture,
        email:req.body.email,
        phone:req.body.phone
    }).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send("Error:"+err)
    })
})
app.listen(3000,()=>{
    console.log('Server running, I knew nodejs but Its for remember')
});

