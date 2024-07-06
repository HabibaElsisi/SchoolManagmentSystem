import joi from "joi"
const updateInfoVal=joi.object({
    id:joi.string().hex().length(24).required(),
    name:joi.string().min(2).max(10),
    email:joi.string().email(),
    password:joi.string().pattern(/^(?=.*[a-zA-Z].*)(?=.*[!#\$%&\?].*).{8,}$/).min(8),
    role:joi.string().valid("SuperAdmin","SchoolAdmin")
})


export{
    updateInfoVal
}