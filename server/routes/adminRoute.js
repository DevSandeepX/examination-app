import {Router} from "express"
import upload from "../middleware/multer.js"
import { addStudent } from "../controllers/adminController.js"
const adminRouter = Router()

adminRouter.post("/add-student",upload.single("image"),addStudent )

export default adminRouter