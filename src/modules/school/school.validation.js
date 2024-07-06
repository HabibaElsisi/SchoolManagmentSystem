import joi from "joi"
const addSchoolVal=joi.object({
    schoolName:joi.string().min(2).max(20).required(),
    location:joi.string().min(2).max(100).required()
})
const paramsVal=joi.object({
    id:joi.string().hex().length(24).required()
})

const updateSchoolVal=joi.object({
    id:joi.string().hex().length(24).required(),
    schoolName:joi.string().min(2).max(20),
    location:joi.string().min(2).max(100)
})


export{
    addSchoolVal,
    paramsVal,
    updateSchoolVal
}