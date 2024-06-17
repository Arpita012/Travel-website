const MONGO_URI='mongodb+srv://Arpita_Naik:arpita123@cluster0.v2sm3ec.mongodb.net/'

const mongoose=require('mongoose')
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(MONGO_URI)
        console.log('-:DataBase Connection Succcessfull:-');
    }catch(error){
        console.log(error);
    }
}
module.exports=connectDB

