import { teacherModel } from "../../../db/models/teacher.model.js"
import { catchError } from "../../middlewares/catchError.js"
import { AppError } from "../../utils/AppError.js"

const addTeacher=catchError(async (req,res,next)=>{
    let school= new teacherModel(req.body)
    school.addedBy=req.user._id
    school.schoolBelongsTo=req.body.schoolBelongsTo
    await school.save()
    res.json({message:"teacher added successfully"})
})
const getAllTeachers=catchError(async(req,res,next)=>{
    let teachers=await teacherModel.find()
    if(teachers.length==0){
        next(new AppError(`there is no teachers`))
    }
    res.json({message:"this is all teachers",teachers})
})

const getSingleTeacher=catchError(async(req,res,next)=>{
    let teacherExists=await teacherModel.findById(req.params.id).populate("classrooms")
    if(!teacherExists)return next(new AppError(`this teacher not found`,404))
    res.json({message:"this is teacher info",teacherExists})
})

const updateTeacher=catchError(async(req,res,next)=>{
    let isteacherExists= await teacherModel.findById(req.params.id)
    if(!isteacherExists)return next(new AppError(`this teacher not exists`,404))
    let teacher=await teacherModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json({message:"teacher info updated successfully",teacher})
})

const deleteTeacher=catchError(async(req,res,next)=>{
    let isteacherExists= await teacherModel.findById(req.params.id)
    if(!isteacherExists)return next(new AppError(`this teacher not exists`,404))
    let teacher=await teacherModel.findByIdAndDelete(req.params.id)
    res.json({message:"teacher deleted successfully",teacher})
})


export{
    addTeacher,
    getAllTeachers,
    getSingleTeacher,
    updateTeacher,
    deleteTeacher
}