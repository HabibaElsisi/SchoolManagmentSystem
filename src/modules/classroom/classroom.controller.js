import { classroomModel } from "../../../db/models/classroom.model.js"
import { catchError } from "../../middlewares/catchError.js"
import { AppError } from "../../utils/AppError.js"

const addClassroom=catchError(async(req,res,next)=>{
    let classroomExists=await classroomModel.findOne({name:req.body.name,location:req.body.location})
    if(classroomExists)return next(new AppError(`this classroom already exists`,404))
    let classroom=new classroomModel(req.body)
    classroom.addedBy=req.user._id
    classroom.teacherOfClass=req.body.teacherOfClass
    classroom.SchoolBelongsTo=req.body.SchoolBelongsTo
    await classroom.save()
    res.json({message:"classroom added successfully"})
})

const getAllClassrooms=catchError(async(req,res,next)=>{
    let classrooms=await classroomModel.find()
    res.json({message:"this is all classrooms",classrooms})

})
const getSingleClassroom=catchError(async(req,res,next)=>{
    let isClassExists=await classroomModel.findById(req.params.id).populate([
       { path:"SchoolBelongsTo",select:"schoolName location"},
       {path:"teacherOfClass",select:"teacherName subject"},
       {path:"student",select:"studentName"}
    ])
    if(!isClassExists)return next(new AppError(`this classroom not found`,404))
    res.json({message:"this is classroom info",isClassExists})

})

const updateClassroom=catchError(async(req,res,next)=>{
    let isClassroomExists= await classroomModel.findOne({ $and: [{ name: req.body.name }, { _id: { $ne: req.params.id } },{location:req.body.location}] });
    if(isClassroomExists)return next(new AppError(`this Classroom already exists choose anthor name`,404))
    let Classroom=await classroomModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json({message:"Classroom info updated successfully",Classroom})
})

const deleteClassroom=catchError(async(req,res,next)=>{
    let ClassroomExists=await classroomModel.findById(req.params.id)
    if(!ClassroomExists) return next(new AppError(`this Classroom not found`,404))
    let Classroom=await classroomModel.findByIdAndDelete(req.params.id)
    res.json({message:"Classroom deleted successfully",Classroom})
})


export {
    addClassroom,
    getAllClassrooms,
    getSingleClassroom,
    updateClassroom,
    deleteClassroom
}