const admin_data=require("../../db_connections/db_schema/admin_db.js");
const get_admin_by_email_api=async(email)=>{
    try{   
           const data=await admin_data.findOne({"email":email});
           return data;
    }
    catch(error)
    { 
        return 0;
    }
}

const add_admin_api=async(data)=>{
    try{  
            const Data=await admin_data.create(data);
            return Data;
    }
    catch(error){
        return 0;
    }
}

const update_admin_api=async(data)=>{
    try{    
            const Data=await admin_data.updateOne({"email":data.email},{$set:{"name":data.name,"password":data.password}});
            return Data;
    }
    catch(error){
        return 0;
    }
}
const delete_admin_api=async(email)=>{
    try{  
            const Data=await admin_data.deleteOne({"email":email});
            return Data;
    }
    catch(error){
        return 0;
    }
}
module.exports= {add_admin_api,get_admin_by_email_api,update_admin_api,delete_admin_api};