const user_data=require("../../db_connections/db_schema/user_db");
const get_injury_by_email_api=async(email)=>{
    try{   
           const data=await user_data.findOne({"email":email});
           return data;
    }
    catch(error)
    { 
        return 0;
    }
}

const add_injury_api=async(user_email,data)=>{
    try{               
            const Data=await user_data.updateOne({"email":user_email}, { $set: {"front_injury": data.front_injury,"back_injury": data.back_injury}});
            return Data;
    }
    catch(error){
        return 0;
    }
}

const delete_injury_api=async(data)=>{
    try{               
        const Data=await user_data.updateOne({"email":data.email},{$set:{"front_injury":data.front_injury,"back_enjury":data.back_enjury}});
        return Data;
    }
    catch(error){
        return 0;
    }
}

module.exports= {get_injury_by_email_api,add_injury_api,delete_injury_api};