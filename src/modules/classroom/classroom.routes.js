import express from "express"
import { protectedRoutes } from "../../middlewares/protectedRoutes.js"
import { allowedTo } from "../../middlewares/allowedTo.js"
import { validation } from "../../middlewares/validation.js"
import { addClassroomVal, paramsVal, updateClassroomVal } from "./classroom.validation.js"
import { addClassroom, deleteClassroom, getAllClassrooms, getSingleClassroom, updateClassroom } from "./classroom.controller.js"
let classroomRouter=express.Router()
classroomRouter.route("/")
    .post(protectedRoutes,allowedTo("SchoolAdmin"),validation(addClassroomVal),addClassroom)
    .get(protectedRoutes,allowedTo("SchoolAdmin","SuperAdmin"),getAllClassrooms)
classroomRouter.route("/:id")
    .get(protectedRoutes,allowedTo("SchoolAdmin","SuperAdmin"),validation(paramsVal),getSingleClassroom)
    .put(protectedRoutes,allowedTo("SchoolAdmin"),validation(updateClassroomVal),updateClassroom)
    .delete(protectedRoutes,allowedTo("SchoolAdmin"),validation(paramsVal),deleteClassroom)





export default classroomRouter