const express=require('express')
const router=express.Router()
const {adminData,}=require('../database/dbconnect')
const login=require('../authentication/sign')

router.get('/',async(req,res)=>{

    const data=await adminData.find({user:'abc'})

    console.log("ha ha\n",data);
    
    res.send({
        name:"sunil",
        rollno:123
    })
})

router.post('/',async(req,res)=>{

    const data=await adminData.find({user:req.body.user})

    if(!data.length){
        res.end(JSON.stringify({
            valid:false,
            token:undefined
        }))
    }
    else{
        if(req.body.password==data[0].password){
            const token=login(req.body.user)
            res.end(JSON.stringify({
                valid:true,
                token:token
            }))
        }
        else{
            res.end(JSON.stringify({
                valid:false,
                token:undefined
            }))
        }
    }

})

module.exports=router