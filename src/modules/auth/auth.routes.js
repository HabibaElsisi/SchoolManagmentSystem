import express from "express"
import { signin, signUp } from "./auth.contoller.js"
import { validation } from "../../middlewares/validation.js"
import { signinVal, sigUpVal } from "./auth.validation.js"
import { isEmailExists } from "../../middlewares/EmailExists.js"
let authRouter=express.Router()

authRouter.post("/sigUp",validation(sigUpVal),isEmailExists,signUp)
authRouter.post("/signIn",validation(signinVal),signin)


export default(authRouter)
