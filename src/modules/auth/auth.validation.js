import joi from "joi"
const sigUpVal=joi.object({
    name:joi.string().min(2).max(20).required(),
    email:joi.string().required().email(),
    password:joi.string().pattern(/^(?=.*[a-zA-Z].*)(?=.*[!#\$%&\?].*).{8,}$/).required().min(8),
    repassword:joi.valid(joi.ref("password")).required(),


})

const signinVal=joi.object({
    email:joi.string().required().trim().email(),
    password:joi.string().pattern(/^(?=.*[a-zA-Z].*)(?=.*[!#\$%&\?].*).{8,}$/).required().min(8),

})

export {
    sigUpVal,
    signinVal
}