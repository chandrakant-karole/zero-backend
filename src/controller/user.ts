import { Request, Response } from "express";
import { createUser } from "~@src/services/user.services";
const signup = async (req: Request, res: Response) => {
    const data = await createUser(req.body)
    res.send(data)
}

export { signup }