
import { globalError } from "../middlewares/globalErrorHandling.js"
import { AppError } from "../utils/AppError.js"
import authRouter from "./auth/auth.routes.js"
import classroomRouter from "./classroom/classroom.routes.js"
import schoolRouter from "./school/school.routes.js"
import studentRouter from "./student/student.routes.js"
import teacherRouter from "./teacher/teacher.routes.js"
import userRouter from "./user/user.routes.js"



export const bootstrap=(app)=>{

    app.use("/api/v1/auth",authRouter)
    app.use("/api/v1/school",schoolRouter)
    app.use("/api/v1/teacher",teacherRouter)
    app.use("/api/v1/classroom",classroomRouter)
    app.use("/api/v1/student",studentRouter)
    app.use("/api/v1/user",userRouter)


    

    app.use('*', (req, res, next) => {
        next(new AppError("not found endPoint", 400))
    })
    
    app.use(globalError)
}