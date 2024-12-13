import express from "express"
import { connectDB } from "./config/db.js"
import "dotenv/config"
import cors from "cors"
import jwt from "jsonwebtoken"


const app = express();
app.use(express.json());
app.use(cors({origin:"*"}));


app.get("/", async (req,res)=>{
  return res.json({message:"Hello"})
})

connectDB()


app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`)
})