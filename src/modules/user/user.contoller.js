import { userModel } from "../../../db/models/user.model.js"
import { AppError } from "../../utils/AppError.js"

const updateUserInfo=async(req,res,next)=>{
    let isUserExists=await userModel.findById(req.params.id)
    if(!isUserExists)return next(new AppError(`this user not found`,404))
    let user=await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json({message:'user info updated successfully',user})
}


export{
    updateUserInfo
}