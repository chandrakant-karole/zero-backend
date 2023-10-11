import express from "express";
import * as dotenv from 'dotenv'
dotenv.config() //setup dotenv
const { PORT } = process.env // getting all env

const app = express() //creating app

app.listen(PORT, (): void => {
    console.log(`server is started on ${PORT}`);
})