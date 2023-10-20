const  {add_user_api,get_user_by_email_api,update_user_api,delete_user_api}=require("../../api/user_api/user_auth_api.js");
const validator=require('validator');

const get_user=async (req,res)=>{
    try{  const user_email=req?.body?.email;
          const user_password=req?.body?.password;
          const data=await get_user_by_email_api(user_email);
          if(!data)
           return res.status(400).send("user not register");
          else
          if(user_password!==data.password)
            return res.status(400).send(" incorrect password");
          else 
            return res.status(200).send(data);
          
       }
    catch
      {
        res.status(400).send("invalid user data");
     }
 }




const add_user=async(req,res)=>{
 try{   let user_data={};
        user_data.first_name=req?.body?.first_name||null;
        user_data.last_name=req?.body?.last_name||null;
        user_data.email=req?.body?.email||null;
        user_data.password=req?.body?.password||null;
        user_data.phone_number=req?.body?.phone_number||null;
        let address={};
        address.street=req?.body?.address?.street||null;
        address.city=req?.body?.address?.city||null;
        address.state=req?.body?.address?.state||null;
        address.postal_code=req?.body?.address?.postal_code||null;
        user_data.address=address||null;
        
        if (!validator.isEmail(user_data.email)) 
            return res.status(400).send("Invalid email");
        try{
            const data= await add_user_api(user_data);
            if(!data)
            return res.status(400).send("user already exist");
            else
             return res.status(200).send(data);
        }
        catch(error)
        {
             return res.status(500).send({error:"user not added"});
        }
        
    }
    catch(error)
    {   
       return res.status(400).send({error:"invalid inputs"});
    }
}


const update_user=async (req,res)=>{
    try{   
           const user_email=req?.body?.email;
           const Data=await get_user_by_email_api(user_email);
           if(!Data)
           return res.status(400).send("user not register");
           let new_data={};
           let address={};
           address.street=req?.body?.address?.street||Data.address.street;
           address.city=req?.body?.address?.city||Data.address.city;
           address.state=req?.body?.address?.state||Data.address.state;
           address.postal_code=req?.body?.address?.postal_code||Data.address.postal_code;
              
           new_data.first_name=req?.body?.first_name||Data.name;
           new_data.last_name=req?.body?.last_name||Data.last_name;
           new_data.email=user_email||null;
           new_data.password=req?.body?.password||Data.password;
           new_data.address=address;

           try{   
                  const updated_data=await update_user_api(new_data);
                 if(updated_data)
                 return res.status(200).send(updated_data);
                 else res.status(500).send("user not updated");  
           }
           catch(error)
           {
               return res.status(400).send("user not upadted");
           }
       }
       catch(error)
       {   res.status(400).send("user not found");
   
       }
   }


   const delete_user=async (req,res)=>{
    try{
             const user_email=req?.body?.email;
             const Data=await get_user_by_email_api(user_email);
             if(!Data)
             return res.status(400).send("user not register");
            
             
             try{
                    const data=await delete_user_api(user_email);
                  if(data) return res.status(200).send("user deleted");
                  else return res.status(500).send("user not deleted");
             }
             catch(error)
              {
                 return res.status(400).send("user not deleted.");
              }


       }
       catch(error)
       {   
          return res.status(500).send("invalid user");
       }
   }



module.exports={get_user,add_user,update_user,delete_user};