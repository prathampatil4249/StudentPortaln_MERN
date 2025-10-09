const user = require('../Models/userModels.js')
const express = require('express')
const auth = require("../middleware/authMiddleware.js")

const router = express.Router()
router.post('/addNewUser',async(req,res)=>{
    try
    {
    const {name,email,age,createdAt} = req.body
    const u = new user({name,email,age,createdAt})
    await u.save()
    res.status(201).json({message:"User added sucessfully"})
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
})

router.get("/getAllStudents",async(req,res)=>{
    try
    {
        const u = await user.find()
        res.status(200).json({u})
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
})

router.get("/getUserById/:_id",async(req,res)=>{
    try
    {
        const u = await user.findById(req.params._id)
        if(!u)
        {
            return res.json({message:"User Not Found"})
        }
        else
        {
            res.status(200).json(u)
        }
       
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
    // console.log("edit is running")
})

// serach user by emailid
router.get("/getUserByEmail/:email",auth,async(req,res)=>{
    try
    {
        const u = await user.find({email:req.params.email})
        res.status(200).json(u)
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
})

// router.patch("/updateUser/:_id",auth,async(req,res)=>{
//     try
//     {
//        const u = await user.findByIdAndUpdate(req.params._id,req.body,{new:true})
    
//        if(!u)
//        {
//         return res.status(404).json({message:"User Not Found"})
//        }
//         res.status(200).json(u)
//     }
//     catch(error)
//     {
//         res.status(500).json({message:error.message})
//     }
// })


router.put("/updateUser/:_id",async(req,res)=>{
    try
    {
       const u = await user.findByIdAndUpdate(req.params._id,req.body,{new:true})
    
       if(!u)
       {
        return res.status(404).json({message:"User Not Found"})
       }
        res.status(200).json({message:"User Updateted Successfully"})
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
})


router.delete("/deleteUser/:_id", async(req,res)=>{
    try
    {
       const u = await user.findByIdAndDelete(req.params._id)
       if(!u)
       {
        return res.status(404).json({message:"User Not Found"})
       }
        res.status(200).json({message:"User Deleted Successfully"})
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
})











module.exports = router;