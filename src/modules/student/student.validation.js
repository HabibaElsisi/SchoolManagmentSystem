import joi from "joi"
const addStudentVal=joi.object({
    studentName:joi.string().min(2).max(10).required(),
    studentEmail:joi.string().required().email(),
    SchoolBelongsTo:joi.string().hex().length(24).required(),
    classroomBelongsTo:joi.string().hex().length(24).required()
})
const paramsVal=joi.object({
    id:joi.string().hex().length(24).required()
})
const updateStudentVal=joi.object({
    id:joi.string().hex().length(24).required(),
    studentName:joi.string().min(2).max(10),
    studentEmail:joi.string().email(),
    SchoolBelongsTo:joi.string().hex().length(24),
    classroomBelongsTo:joi.string().hex().length(24)
})

export {
    addStudentVal,
    paramsVal,
    updateStudentVal
}