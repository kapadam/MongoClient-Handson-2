const express=require("express");
const app=express();
const employee=require("./routes/employee");

const bodyParser=require("body-parser");

app.use(bodyParser.json());

app.use("/",employee);

app.listen(6000,()=>{
    console.log("server is running on 6000...");
})