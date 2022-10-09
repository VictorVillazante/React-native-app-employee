const mongosse=require('mongoose');
const EmployeeSchema=mongosse.Schema({
    name:String,
    position:String,
    salary:String,
    picture:String,
    email:String,
    phone:String
})
mongosse.model("employee",EmployeeSchema)

