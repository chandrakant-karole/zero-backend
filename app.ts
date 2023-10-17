import express from "express";
import * as dotenv from 'dotenv'
import { router } from "~@src/routes/routes";
import connection from "~@src/config/db";
dotenv.config() //setup dotenv
const { PORT } = process.env // getting all env
connection() //db connection
const app = express() //creating app
app.use(express.json()) 
app.use('/', router)
app.listen(PORT, (): void => {
    console.log(`server is started on ${PORT}`);
})