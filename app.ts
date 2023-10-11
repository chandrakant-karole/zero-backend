import express from "express";
import * as dotenv from 'dotenv'
import { router } from "./src/routes/routes";
dotenv.config() //setup dotenv
const { PORT } = process.env // getting all env

const app = express() //creating app
app.use('/', router)
app.listen(PORT, (): void => {
    console.log(`server is started on ${PORT}`);
})