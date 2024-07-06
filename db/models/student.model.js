import mongoose from "mongoose";
const Schema= new mongoose.Schema({
    studentName:String,
    studentEmail:String,
    addedBy:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    SchoolBelongsTo:{
        type:mongoose.Types.ObjectId,
        ref:"school"
    },
    classroomBelongsTo:{
        type:mongoose.Types.ObjectId,
        ref:"classroom"
    }
},{ timestamps: true})



export const studentModel=mongoose.model("student",Schema)