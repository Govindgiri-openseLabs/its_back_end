const mongoose=require("mongoose");
const admin_schema=new mongoose.Schema(
    {
        name:{
            type:String,
        },
        email:{
            type:String,
            unique:true,
            required:true,
        },
        password:{
            type:String,
        },
    },
    {versionKey:false}
);

module.exports=mongoose.model("admin_collection",admin_schema);