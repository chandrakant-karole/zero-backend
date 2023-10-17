import { Request, Response } from "express";
import { createUser, findUser } from "~@src/services/user.services";

const signup = async (req: Request, res: Response) => {
    const data = await createUser(req.body)
    res.send(data)
}

const login = async (req: Request, res: Response) => {
    const data = await findUser({ email: req.body.email })
    res.send(data)
}

export { signup, login }