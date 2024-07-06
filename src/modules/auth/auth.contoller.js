import { userModel } from "../../../db/models/user.model.js"
import { catchError } from "../../middlewares/catchError.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const signUp=catchError(async(req,res,next)=>{
    let user=new userModel(req.body)
    await user.save()
    
    let token=jwt.sign({userId:user._id,role:user.role},process.env.JWT_KEY)
    res.json({message:"signUp successfully",token})
})

const signin = catchError(async (req, res,next) => {
    let user = await userModel.findOne({ email: req.body.email })
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
            let token = jwt.sign({ userId: user._id,role:user.role },process.env.JWT_KEY)
            let role=user.role
        return res.json({ message: "login Successfully", token ,role})
    }

    return res.json({ message: "incorrect email or password " })
})


export{
    signUp,
    signin
}
