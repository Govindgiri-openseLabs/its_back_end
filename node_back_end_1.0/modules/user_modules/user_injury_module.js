const  {get_injury_by_email_api,add_injury_api,delete_injury_api}=require("../../api/user_api/user_injury_api");
const validator=require('validator');

const get_injury=async (req,res)=>{
    try{  
          const user_email=req?.body?.email;
          let data=await get_injury_by_email_api(user_email);
          if(!data)
           return res.status(400).send("user not register");
          else 
            return res.status(200).send(data);   
       }
    catch
      {
         res.status(400).send("invalid user data");
     }
 }

const add_injury=async(req,res)=>{
    try{   
          let user_email=req?.body?.email;
          const front_injury_array=req?.body?.front_injury||[];
          const back_injury_array=req?.body?.back_injury||[];
          const data=await get_injury_by_email_api(user_email);
          
            Object.keys(data.front_injury).forEach(key => {
                data.front_injury[key]="false";
            });
            Object.keys(data.back_injury).forEach(key => {
                data.back_injury[key]="false";
            });
    
          if(!data) return res.status(400).send({error:"user not found"});
          try{ 

            for(let i=0;i<front_injury_array.length;i++){
               if(data.front_injury[front_injury_array[i]])
                data.front_injury[front_injury_array[i]]="true";
            }

            for(let i=0;i<back_injury_array.length;i++){
              if( data.back_injury[back_injury_array[i]])
                data.back_injury[back_injury_array[i]]="true";
            }
           console.log(data,"govind");
            const user_data=await add_injury_api(user_email,data);
            if(user_data)  return res.status(200).send({"injury added successfully":user_data});
            return res.status(500).send({error:"injury not added"});
        }
        catch(error)
        {
             return res.status(503).send({error:"injury not added"});
        }
        
    }
    catch(error)
    {   
       return res.status(400).send({error:"invalid inputs"});
    }
}

const delete_injury=async(req,res)=>{
    try{ 
          let user_email=req?.body?.email;
          const front_enjury_array=req?.body?.front_enjury||[];
          const back_enjury_array=req?.body?.back_enjury||[];
          const data=await get_user_by_email_api(user_email);
         
          try{ 

            for(let i=0;i<front_enjury_array.length;i++){
                data[front_enjury_array[i]]=false;
            }
            for(let i=0;i<back_enjury_array.length;i++){
                data[back_enjury_array[i]]=false;
            }
            const user_data=await delete_injury_api(user_email,data);
            if(user_data)  return res.status(200).send("injury deleted successfully");
            return res.status(500).send({error:"injury not deleted"});
        }
        catch(error)
        {
             return res.status(503).send({error:"injury not deleted"});
        }
        
    }
    catch(error)
    {   
       return res.status(400).send({error:"invalid inputs"});
    }
}


module.exports={get_injury,add_injury,delete_injury};