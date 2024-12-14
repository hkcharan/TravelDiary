import {register} from "../controllers/userController.js"
import express from "express"

const router = express.Router()

router.post("/signup", register);


export default router;