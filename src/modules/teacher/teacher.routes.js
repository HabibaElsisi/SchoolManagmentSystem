import express from "express"
import { protectedRoutes } from "../../middlewares/protectedRoutes.js"
import { allowedTo } from "../../middlewares/allowedTo.js"
import { validation } from "../../middlewares/validation.js"
import { addTeacherVal, paramsVal, updateTecaherVal } from "./teacher.validation.js"
import { addTeacher, deleteTeacher, getAllTeachers, getSingleTeacher, updateTeacher } from "./teacher.controller.js"
let teacherRouter=express.Router()
teacherRouter.route("/")
    .post(protectedRoutes,allowedTo("SchoolAdmin"),validation(addTeacherVal),addTeacher)
    .get(protectedRoutes,allowedTo("SchoolAdmin","SuperAdmin"),getAllTeachers)
teacherRouter.route("/:id")
    .get(protectedRoutes,allowedTo("SchoolAdmin","SuperAdmin"),validation(paramsVal),getSingleTeacher)
    .put(protectedRoutes,allowedTo("SchoolAdmin"),validation(updateTecaherVal),updateTeacher)
    .delete(protectedRoutes,allowedTo("SchoolAdmin"),validation(paramsVal),deleteTeacher)








export default teacherRouter