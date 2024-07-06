import mongoose from "mongoose";
const Schema= new mongoose.Schema({
    schoolName:String,
    location:String,
    addedBy:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    }
},{ timestamps: true,toJSON:{virtuals:true} })

Schema.virtual("classrooms",{
    ref:"classroom",
    localField:"_id",//id of product model here
    foreignField:"SchoolBelongsTo"//bookId in review model
});

Schema.virtual("teachers",{
    ref:"teacher",
    localField:"_id",//id of product model here
    foreignField:"schoolBelongsTo"//bookId in review model
});
export const schoolModel=mongoose.model("school",Schema)