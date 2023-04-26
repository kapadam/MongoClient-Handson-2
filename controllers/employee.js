const {insertToDB,findInDB,findEmployeeSalaryThirtyThousand,findEmployeeYearGradAndExp,updateEmployeeSalary,deleteEmployeeYLastCompany}=require(".././connection/database");

const saveEmployeeData=async(req,res)=>{
    const employeeData=req.body;
    console.log(employeeData);
    try{
        const result=await insertToDB(employeeData);
        return res.status(200).send(result);
    }catch(error){
        return res.status(500).send({message:"something went wrong while inserting details..."})

    }
}
// get all the employees data
const getEmployeeData=async(req,res)=>{
    try{
        const result=await findInDB();
        return res.status(200).send(result);
    }catch(error){
        return res.status(500).send({message:"somethong went wrong..."});
    }
}

const getSalaryThirtyThousand=async(req,res)=>{
    const query={salary:{$gt:30000}};
    try{
        const result=await findEmployeeSalaryThirtyThousand(query);
        return res.status(200).send(result);
    }catch(error){
        return res.status(500).send({message:"something went wrong..."});
    }
    
}

const getExpTwoYears=async(req,res)=>{
    const query={overallExp:{$gt:2}};
    try{
        const result=await findEmployeeExpTwoYears(query);
        return res.status(200).send(result);
    }catch(error){
        return res.status(500).send({message:"something went wrong..."});
    }
}

const getYearGrandAndExp=async(req,res)=>{
    const query={$and:[{yearGrad:{$gt:2015}},{overallExp:{$gt:1}}]};
    try{
        const result=await findEmployeeYearGradAndExp(query);
        return res.status(200).send(result);
    }catch(error){
        return res.status(500).send({message:"something went wrong..."});
    }
}

const updateSalary=async(req,res)=>{
    const updateData = req.body;
    const filter = updateData.filter;
    const value = {$set: updateData.value}
    try{
        const result=await updateEmployeeSalary(filter,value);
        return res.status(200).send(result);
    }catch(error){
        return res.status(500).send({message:"something went wrong..."})
    }
}

const deleteYLastCompany=async(req,res)=>{
    const query={lastCompany:"Y"};
    try{
        const result=await deleteEmployeeYLastCompany(query);
        return res.status(200).send(result);
    }catch(error){
        return res.status(500).send({message:"something went wrong..."});
    }
}

module.exports={
    saveEmployeeData,
    getEmployeeData,
    getSalaryThirtyThousand,
    getExpTwoYears,
    getYearGrandAndExp,
    updateSalary,
    deleteYLastCompany,
}