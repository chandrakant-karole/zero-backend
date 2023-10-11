import { Request, Response } from "express";

const test = async (req:Request, res:Response) => {
    res.json({name:'test run'})
}

export {test}