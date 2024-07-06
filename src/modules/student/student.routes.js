import express from "express"
import { protectedRoutes } from "../../middlewares/protectedRoutes.js"
import { allowedTo } from "../../middlewares/allowedTo.js"
import { validation } from "../../middlewares/validation.js"
import { addStudentVal, paramsVal, updateStudentVal } from "./student.validation.js"
import { addStudent, deleteStudent, getAllStudent, getSingleStudent, updateStudent } from "./student.controller.js"
let studentRouter=express.Router()
studentRouter.route("/")
    .post(protectedRoutes,allowedTo("SchoolAdmin"),validation(addStudentVal),addStudent)
    .get(protectedRoutes,allowedTo("SuperAdmin","SchoolAdmin"),getAllStudent)
studentRouter.route("/:id")
    .get(protectedRoutes,allowedTo("SuperAdmin","SchoolAdmin"),validation(paramsVal),getSingleStudent)
    .put(protectedRoutes,allowedTo("SchoolAdmin"),validation(updateStudentVal),updateStudent)
    .delete(protectedRoutes,allowedTo("SchoolAdmin"),validation(paramsVal),deleteStudent)







export default studentRouter