import express from "express"
import { addSchool, deleteSchool, getAllSchools, getSingleSchool, updateSchool } from "./school.controller.js"
import { protectedRoutes } from "../../middlewares/protectedRoutes.js"
import { allowedTo } from "../../middlewares/allowedTo.js"
import { addSchoolVal, paramsVal, updateSchoolVal } from "./school.validation.js"
import { validation } from "../../middlewares/validation.js"
let schoolRouter=express.Router()
schoolRouter.route("/")
    .post(protectedRoutes,allowedTo("SuperAdmin"),validation(addSchoolVal),addSchool)
    .get(protectedRoutes,allowedTo("SuperAdmin","SchoolAdmin"),getAllSchools)
schoolRouter.route("/:id")
    .get(protectedRoutes,allowedTo("SuperAdmin","SchoolAdmin"),validation(paramsVal),getSingleSchool)
    .put(protectedRoutes,allowedTo("SuperAdmin"),validation(updateSchoolVal),updateSchool)
    .delete(protectedRoutes,allowedTo("SuperAdmin"),validation(paramsVal),deleteSchool)


export default schoolRouter