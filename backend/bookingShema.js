const mongoose=require('mongoose');

const newSchema=mongoose.Schema({
    destination:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    email:
    {
        type:String,
        required: true,
        unique: true,
    },
    traveldate:{
        type:Date,
        default:Date.now,
    }
})

const bookingSchema=mongoose.model("booking",newSchema);
module.exports=bookingSchema
