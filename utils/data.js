const express=require('express')
const router=express.Router()
const {adminData,applications}=require('../database/dbconnect')
const login=require('../authentication/sign')
const authenticateToken=require('../authentication/auth')

router.post('/',async(req,res)=>{
    const a=authenticateToken(req.body.token)
    console.log('a;;;;;',a);
    // console.log("tt",req.body.token);
    if(a){
        // const admin=await adminData.findOne({user:a})
        // const data=await applications.findOne({handler:a})

        // res.end(JSON.stringify({
        //     admin:admin,
        //     data:data
        // }))
        res.end("dsd")
    }
    else{
        res.sendStatus(403)
        res.end()
    }
})

module.exports=router