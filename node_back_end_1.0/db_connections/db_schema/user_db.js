const { ObjectId, Timestamp } = require("mongodb");
const mongoose=require("mongoose");
const user_schema=new mongoose.Schema(
    {
        first_name:{
            type:String,
        },
        last_name:{
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
        phone_number:{
           type:String,
        },
        address:{
             street:{
                      type:String,
                    },
             city:{
                     type:String,
                  },
             state:{
                 type:String,
                  },
             postal_code:{
                 type:String,
              }
        },
       date:{
              type:Date,
            }, 
       front_injury:{
           face:{
             type:String,
             default:"false",
            },
           right_hand:{
             type:String,
             default:"false"
            },
           left_hand:{
             type:String,
             default:"false"
            },
           right_leg:{
              type:String,
              default:"false"
            },
           left_leg:{
             type:String,
             default:"false"
            },
           trunk:{
            type:String,
            default:"false"
            } 
          },
      back_injury:{
           head:{
            type:String,
            default:"false"
            },
           right_hand:{
            type:String,
            default:"false"
            },
           left_hand:{ 
            type:String,
            default:"false"
            },
           right_leg:{
            type:String,
            default:"false"
            },
           left_leg:{
            type:String,
            default:"false"
            },
           back:{
            type:String,
            default:"false"
           } 
         },

    },
    {versionKey:false}
);

module.exports=mongoose.model("user_collection",user_schema);