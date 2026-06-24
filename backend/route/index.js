import { Router } from "express";
import userRouter from './userRoute.js'

const router =Router()

router.post("/user",userRouter)

export default router
