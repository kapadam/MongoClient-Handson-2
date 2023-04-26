const {MongoClient}=require("mongodb");

const url='mongodb://127.0.0.1:27017';
const client=new MongoClient(url);

const insertToDB=async(data)=>{
    try{
        await client.connect();
        const database=client.db("Human_Resource");
        const collection=database.collection("employee");
        const dbResponse=await collection.insertMany(data);
        await client.close();
        return dbResponse;
    }catch(error){
        console.log("Error occured while performing inser function...");
        return error.message;

    }
}

const findInDB=async()=>{
    try{
        await client.connect();
        const database=client.db("Human_Resource");
        const collection=database.collection("employee");
        const dbResponse=await collection.find().toArray();
        await client.close();
        return dbResponse;
    }catch(error){
        console.log("Error occured while performing db operation => ",error.message);
        return error.message;
    }
    
}

const findEmployeeSalaryThirtyThousand=async(query)=>{
    try{
        await client.connect();
        const database=client.db("Human_Resource");
        const collection=database.collection("employee");
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    }catch(error){
        console.log("Error occured while performing db operationn => ",error.message);
        return error.message;
    }
}

const findEmployeeExpTwoYears=async(query)=>{
    try{
        await client.connect();
        const database=client.db("Human_Resource");
        const collection=database.collection("employee");
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    }catch(error){
        console.log("Error occured while performing db Operation => ",error.message);
        return error.message;
    }
}

const findEmployeeYearGradAndExp=async(query)=>{
    try{
        await client.connect();
        const database=client.db("Human_Resource");
        const collection=database.collection("employee");
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    }catch(error){
        console.log("Error occured while performing db operation => ",error.message);
        return error.message;
    }
}

const updateEmployeeSalary=async(filteredCondition,value)=>{
    try{
        await client.connect();
        const database=client.db("Human_Resource");
        const collection=database.collection("employee");
        const dbResponse=await collection.updateMany(filteredCondition,value);
        await client.close();
        return dbResponse;
    }catch(error){
        console.log("Error occured while performing db operation => ",error.message);
        return error.message;
    }

}

const deleteEmployeeYLastCompany=async(condition)=>{
    try{
        await client.connect();
        const database=client.db("Human_Resource");
        const collection=database.collection("employee");
        const dbResponse=await collection.deleteMany(condition);
        await client.close();
        return dbResponse;
    }catch(error){
        console.log("Error occured while performing db operation => ",error.message);
        return error.message;
    }
}

module.exports={
    insertToDB,
    findInDB,
    findEmployeeSalaryThirtyThousand,
    findEmployeeExpTwoYears,
    findEmployeeYearGradAndExp,
    updateEmployeeSalary,
    deleteEmployeeYLastCompany,
}