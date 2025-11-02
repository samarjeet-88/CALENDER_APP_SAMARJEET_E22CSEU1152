import mongoose, { Schema } from "mongoose";



const dayEventSchema=new Schema({
    date:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    allEvents:[
        {
            type:Schema.Types.ObjectId,
            ref:"Event"
        }
    ]
})

export const dayEvent=mongoose.model("dayEvent",dayEventSchema)