import * as dotenv from 'dotenv'
dotenv.config() //setup dotenv
import express from "express";
import { router } from "~@src/routes/routes";
import connection from "~@src/config/db";
connection() //db connection

const { PORT } = process.env // getting all env
const app = express() //creating app
app.use(express.json()) 
app.use('/', router)
app.listen(PORT, (): void => {
    console.log(`server is started on ${PORT}`);
})