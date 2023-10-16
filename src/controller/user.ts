import { Request, Response } from "express";
import { SignupModel } from "@/src/models/users";

const test = async (req: Request, res: Response) => {
    res.json({ name: 'test run' })
}

const signup = async (req: Request, res: Response) => {
    const data = new SignupModel(req.body)
    const result = await data.save()
    console.log(result);
    res.send(result)
}

export { test, signup }