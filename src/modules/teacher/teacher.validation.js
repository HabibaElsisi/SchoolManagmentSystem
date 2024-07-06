import joi from "joi"
const addTeacherVal=joi.object({
    teacherName:joi.string().min(2).max(10).required(),
    subject:joi.string().min(2).max(10).required(),
    schoolBelongsTo:joi.string().hex().length(24).required()

})
const paramsVal=joi.object({
    id:joi.string().hex().length(24).required()
})
const updateTecaherVal=joi.object({
    id:joi.string().hex().length(24).required(),
    teacherName:joi.string().min(2).max(10),
    subject:joi.string().min(2).max(10),
    schoolBelongsTo:joi.string().hex().length(24)


})


export{
    addTeacherVal,
    paramsVal,
    updateTecaherVal
}