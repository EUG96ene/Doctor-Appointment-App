import Doctor from '../models/DoctorSchema.js';

export const updateDoctor = async (req, res) =>{
   const id= req.params.id;


   try {
       const updateDoctor = await Doctor.findByIdAndUpdate(id, {$set:req.body},{new:true})

     res.status(200).json({success:true, message:"successfully updated", data:updateDoctor})
   } catch (err){
       res.status(500).json({success:false, message:"failed to updated"})
  
   }
   
};
export const deleteDoctor = async (req, res) =>{
   const id= req.params.id


   try {
      await Doctor.findByIdAndDelete(id,)

     res.status(200).json({success:true, message:"successfully deleted"})
   } catch (err){
       res.status(500).json({success:false, message:"failed to delete"})
  
   }
   
};
export const getSingleDoctor = async (req, res) =>{
   const id= req.params.id;


   try {

    //Fill data. like search for specific 
       const doctor = await Doctor.findById(id)
       .populate("reviews")
       .select("-password");

     res.status(200).json({success:true, message:"Doctor found", data:doctor})
   } catch (err){
       res.status(404).json({success:false, message:"No Doctor found"})
  
   }
   
};
export const getAllDoctor = async (req, res) =>{
  try {
    const {query} =req.query

    let doctors;
    if(query){
        doctors= await Doctor.find({
            isApproved:'approved', 
            $or:[
                {name:{$regex:query, $options:"1"}},
                {specialization:{$regex:query, $options:"1"}}
    ],
    }).select("-password")
    } else{
        doctors = await Doctor.find({isApproved:'approved'}).select("-password");
    }

     res.status(200).json({success:true, message:"Doctors found", data:doctors})
   } catch (err){
       res.status(404).json({success:false, message:"Not found"})
  
   }
   
};
