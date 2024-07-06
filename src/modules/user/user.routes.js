import express from "express"
import { protectedRoutes } from "../../middlewares/protectedRoutes.js"
import { allowedTo } from "../../middlewares/allowedTo.js"
import { validation } from "../../middlewares/validation.js"
import { updateInfoVal } from "./user.validation.js"
import { updateUserInfo } from "./user.contoller.js"
let userRouter=express.Router()
userRouter.route("/:id")
    .put(protectedRoutes,allowedTo("SuperAdmin"),validation(updateInfoVal),updateUserInfo)










export default userRouter