 import User from '../models/UserSchema.js';

 export const updateUser = async (req, res) =>{
    const id= req.params.id


    try {
        const updateUser = await User.findByIdAndUpdate(id, {$set:req.body},{new:true})

      res.status(200).json({success:true, message:"successfully updated", data:updateUser})
    } catch (err){
        res.status(500).json({success:false, message:"failed to updated"})
   
    }
    
 };
 export const deleteUser = async (req, res) =>{
    const id= req.params.id


    try {
       await User.findByIdAndDelete(id,)

      res.status(200).json({success:true, message:"successfully deleted"})
    } catch (err){
        res.status(500).json({success:false, message:"failed to delete"})
   
    }
    
 };
 export const getSingleUser = async (req, res) =>{
    const id= req.params.id


    try {
        const user = await User.findById(id).select("-password");

      res.status(200).json({success:true, message:"User found", data:user})
    } catch (err){
        res.status(404).json({success:false, message:"No user found"})
   
    }
    
 };
 export const getAllUser = async (req, res) =>{
    try {
        const user = await User.find({}).select("-password");

      res.status(200).json({success:true, message:"Users found", data:user})
    } catch (err){
        res.status(404).json({success:false, message:"Not found"})
   
    }
    
 };
 