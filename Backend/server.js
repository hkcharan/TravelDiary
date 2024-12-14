import express from "express"
import { connectDB } from "./config/db.js"
import "dotenv/config"
import cors from "cors"
import jwt from "jsonwebtoken"
import userRouter from "./routes/userRoutes.js"

const app = express();
app.use(express.json());
app.use(cors({origin:"*"}));


app.use("/api/user",userRouter);


connectDB()


app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`)
})