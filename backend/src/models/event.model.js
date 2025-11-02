import mongoose,{Schema} from "mongoose";


const eventSchema=new Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:false
    },
},{timestamps:true})

export const Event=mongoose.model("Event",eventSchema)