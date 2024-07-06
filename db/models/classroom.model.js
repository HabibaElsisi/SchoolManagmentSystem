import mongoose from "mongoose";
const Schema= new mongoose.Schema({
    name:String,
    capacity:Number,
    location:String,
    subject:String,
    addedBy:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    teacherOfClass:{
        type:mongoose.Types.ObjectId,
        ref:"teacher"
    },
    SchoolBelongsTo:{
        type:mongoose.Types.ObjectId,
        ref:"school"
    },
    numberOfStudent:{
        type:Number,
        default:0
    }

},{ timestamps: true ,toJSON:{virtuals:true}})

Schema.virtual("student",{
    ref:"student",
    localField:"_id",//id of product model here
    foreignField:"classroomBelongsTo"//bookId in review model
});
export const classroomModel=mongoose.model("classroom",Schema)