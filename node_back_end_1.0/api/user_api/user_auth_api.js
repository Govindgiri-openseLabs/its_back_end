const user_data=require("../../db_connections/db_schema/user_db");
const get_user_by_email_api=async(email)=>{
    try{   
           const data=await user_data.findOne({"email":email});
           return data;
    }
    catch(error)
    { 
        return 0;
    }
}

const add_user_api=async(data)=>{
    try{    const Data=await user_data.create(data);
            return Data;
    }
    catch(error){
        return 0;
    }
}

const update_user_api=async(data)=>{
    try{               
            const Data=await user_data.updateOne({"email":data.email},{$set:{"first_name":data.first_name,"last_name":data.last_name,"password":data.password,
            "address":data.address
        }});
            return Data;
    }
    catch(error){
        return 0;
    }
}
const delete_user_api=async(email)=>{
    try{  
            const Data=await user_data.deleteOne({"email":email});
            return Data;
    }
    catch(error){
        return 0;
    }
}
module.exports= {add_user_api,get_user_by_email_api,update_user_api,delete_user_api};