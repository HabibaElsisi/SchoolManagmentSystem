import { schoolModel } from "../../../db/models/school.model.js"
import { catchError } from "../../middlewares/catchError.js"
import { AppError } from "../../utils/AppError.js"

const addSchool=catchError(async(req,res,next)=>{
    let schoolExists= await schoolModel.findOne({schoolName:req.body.schoolName,location:req.body.location})
    if(schoolExists) return next(new AppError(`this school already exists`))
    let school= new schoolModel(req.body)
    school.addedBy=req.user._id
    await school.save()
    res.json({message:"school added successfully"})


})

const getAllSchools=catchError(async(req,res,next)=>{
    let schools=await schoolModel.find()
    if(schools.length==0){
        next(new AppError(`there is no schools`))
    }
    res.json({message:"this is all schools",schools})
})


const getSingleSchool=catchError(async(req,res,next)=>{
    let school=await schoolModel.findById(req.params.id).populate("teachers")
    if(!school)return next(new AppError(`this school not found`,404))
    res.json({message:"this is the school",school})
})
const updateSchool=catchError(async(req,res,next)=>{
    let isSchoolExists= await schoolModel.findOne({ $and: [{ schoolName: req.body.schoolName }, { _id: { $ne: req.params.id } }] });
    if(isSchoolExists)return next(new AppError(`this school already exists choose anthor name`,404))
    let school=await schoolModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json({message:"school info updated successfully",school})
})

const deleteSchool=catchError(async(req,res,next)=>{
    let schoolExists=await schoolModel.findById(req.params.id)
    if(!schoolExists) return next(new AppError(`this school not found`,404))
    let school=await schoolModel.findByIdAndDelete(req.params.id)
    res.json({message:"school deleted successfully",school})
})






export{
    addSchool,
    getAllSchools,
    getSingleSchool,
    updateSchool,
    deleteSchool
}