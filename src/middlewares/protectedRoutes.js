import jwt from"jsonwebtoken"



import { userModel } from "../../db/models/user.model.js"
import { AppError } from "../utils/AppError.js"
import { catchError } from "./catchError.js"


export const protectedRoutes=catchError(async(req,res,next)=>{
    if(!req.headers.token)return next(new AppError(`token not provided`,401))
    let decoded=jwt.verify(req.headers.token,process.env.JWT_KEY)
    let user =await userModel.findById(decoded.userId)
    if(!user) return next(new AppError(`user not found`,401))
   
    req.user=user
    next()


})