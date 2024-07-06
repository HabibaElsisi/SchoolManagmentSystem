import { classroomModel } from "../../../db/models/classroom.model.js"
import { studentModel } from "../../../db/models/student.model.js"
import { catchError } from "../../middlewares/catchError.js"
import { AppError } from "../../utils/AppError.js"

const addStudent=catchError(async(req,res,next)=>{
    let isStudentExists=await studentModel.findOne({studentEmail:req.body.studentEmail})
    if(isStudentExists) return next(new AppError(`this student already exists`,404))
    let student= new studentModel(req.body)
    student.addedBy=req.user._id
    await student.save()
    let studentNum=await classroomModel.findById(student.classroomBelongsTo)
    if(studentNum.numberOfStudent>=studentNum.capacity)return next(new AppError(`number of student exceed the capacity limit`))
    ++studentNum.numberOfStudent
    await studentNum.save()
    res.json({message:"student added successfully",student})

}
)

const getAllStudent=catchError(async(req,res,next)=>{
    let students=await studentModel.find()
    res.json({messgae:"this is all students",students})
})

const getSingleStudent=catchError(async(req,res,next)=>{
    let isStudentExists=await studentModel.findById(req.params.id).populate([
        {path:"SchoolBelongsTo",select:"schoolName"},
        {path:"classroomBelongsTo",select:"name location"}
    ])
    if(!isStudentExists) return next(new AppError(`this student not found`,404))
        res.json({message:"this is student info",isStudentExists})

})
const updateStudent=catchError(async(req,res,next)=>{
    let isStudentExists= await studentModel.findOne({ $and: [{ studentEmail: req.body.studentEmail }, { _id: { $ne: req.params.id } }] });
    if(isStudentExists)return next(new AppError(`this Student already exists choose anthor name`,404))
    let Student=await studentModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json({message:"Student info updated successfully",Student})
})

const deleteStudent=catchError(async(req,res,next)=>{
    let StudentExists=await studentModel.findById(req.params.id)
    if(!StudentExists) return next(new AppError(`this Student not found`,404))
    let Student=await studentModel.findByIdAndDelete(req.params.id)
    res.json({message:"Student deleted successfully",Student})
})
export{
    addStudent,
    getAllStudent,
    getSingleStudent,
    updateStudent,
    deleteStudent
}