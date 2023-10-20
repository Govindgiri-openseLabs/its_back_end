const {add_admin_api,get_admin_by_email_api,update_admin_api,delete_admin_api}=require("../../api/admin_api/admin_auth_api");
const validator=require('validator');

const get_admin=async (req,res)=>{
    try{  const admin_email=req?.body?.email;
          const admin_password=req?.body?.password;
          const data=await get_admin_by_email_api(admin_email);
          if(!data)
           return res.status(400).send("admin not register");
          else
          if(admin_password!==data.password)
            return res.status(400).send(" incorrect password");
          else 
            return res.status(200).send(data);
          
       }
    catch
      {
        res.status(400).send("invalid admin data");
     }
 }




const add_admin=async(req,res)=>{
 try{   let admin_data={};
        admin_data.email=req?.body?.email||null;
        admin_data.password=req?.body?.password||null;
        admin_data.name=req?.body?.name||null;
       // const admin_secret_key=req?.body?.secret_key;
        if (!validator.isEmail(admin_data.email)) 
            return res.status(400).send("Invalid email");
        try{
            const data= await add_admin_api(admin_data);
            if(!data)
            return res.status(400).send("admin already exist");
            else
             return res.status(200).send(data);
        }
        catch(error)
        {
             return res.status(500).send({error:"admin not added"});
        }
        
    }
    catch(error)
    {   
       return res.status(400).send({error:"invalid inputs"});
    }
}


const update_admin=async (req,res)=>{
    try{   
           const admin_email=req?.body?.email;
           //const admin_secret_key=req?.body?.secret_key;
           const Data=await get_admin_by_email_api(admin_email);
           if(!Data)
           return res.status(400).send("admin not register");
           const new_data={};
           new_data.email=admin_email;
           new_data.password=req?.body?.password||Data.password;
           new_data.name=req?.body?.name||Data.name;
        
           try{   
                  const updated_data=await update_admin_api(new_data);
                 if(updated_data)
                 return res.status(200).send(updated_data);
                 else res.status(500).send("admin not updated");  
           }
           catch(error)
           {
               return res.status(400).send("admin not upadted");
           }
       }
       catch(error)
       {   res.status(400).send("admin not found");
   
       }
   }


   const delete_admin=async (req,res)=>{
    try{
             const admin_email=req?.body?.email;
             const Data=await get_admin_by_email_api(admin_email);
             if(!Data)
             return res.status(400).send("admin not register");
            //const admin_secret_key=req?.body?.secret_key;
             
             try{
                    const data=await delete_admin_api(admin_email);
                  if(data) return res.status(200).send("admin deleted");
                  else return res.status(500).send("admin not deleted");
             }
             catch(error)
              {
                 return res.status(400).send("admin not deleted.");
              }


       }
       catch(error)
       {   
          return res.status(500).send("invalid admin");
       }
   }



module.exports={get_admin,add_admin,update_admin,delete_admin};