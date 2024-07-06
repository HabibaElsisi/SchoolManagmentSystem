import joi from "joi"
const addClassroomVal=joi.object({
    name:joi.string().min(2).max(10).required(),
    capacity:joi.number().required().min(2).max(55),
    location:joi.string().min(2).max(20).required(),
    subject:joi.string().min(2).max(20).required(),
    teacherOfClass:joi.string().hex().length(24).required(),
    SchoolBelongsTo:joi.string().hex().length(24).required()
})
const paramsVal=joi.object({
    id:joi.string().hex().length(24).required()
})
const updateClassroomVal=joi.object({
    id:joi.string().hex().length(24).required(),
    name:joi.string().min(2).max(20),
    location:joi.string().min(2).max(100)
})




export{
    addClassroomVal,
    paramsVal,
    updateClassroomVal
}