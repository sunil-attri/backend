const mongoose=require('mongoose')

const connectdb=async()=>{
    await mongoose.connect("mongodb+srv://officialsunil345:12345678aA@cluster0.8subgjz.mongodb.net/?retryWrites=true&w=majority")
}

connectdb();

const schema1=new mongoose.Schema({
    user:String,
    password:String
})

const schema2=new mongoose.Schema({
    applicationNo:String,
    name:String,
    status:Number,
    handler:String,
})

const adminData=mongoose.model('adminData',schema1)
const applications=mongoose.model('application',schema2)
module.exports={adminData,applications}