import mongoose from "mongoose";
const Schema= new mongoose.Schema({
    teacherName:String,
    subject:String,
    addedBy:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    schoolBelongsTo:{
        type:mongoose.Types.ObjectId,
        ref:"school"
    }
},{ timestamps: true ,toJSON:{virtuals:true}})

Schema.virtual("classrooms",{
    ref:"classroom",
    localField:"_id",
    foreignField:"teacherOfClass"
});


export const teacherModel=mongoose.model("teacher",Schema)