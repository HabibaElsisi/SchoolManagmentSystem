import mongoose from "mongoose";
import bcrypt from "bcrypt"
const Schema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        enum:["SuperAdmin","SchoolAdmin"],
        default:"SchoolAdmin"
    },
},{ timestamps: true })


Schema.pre("save",function(){
    this.password=bcrypt.hashSync(this.password,8) 
})

Schema.post("findOneAndUpdate",function(){
if(this._update.password){
this._update.password=bcrypt.hashSync(this._update.password,8)

}

})
export const userModel=mongoose.model("user",Schema)