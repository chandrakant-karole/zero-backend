import { Document } from "mongoose"

export interface UserDocument extends Document {
    username: string,
    firstName: string,
    lastName: string,
    contactNumber: number,
    email: string,
    password: string,
    termsAndConditions: boolean
}

export interface UserLogin extends Document {
    email: string,
    password: string,
}
export interface UserSignup {
    username: string,
    firstName: string,
    lastName: string,
    contactNumber: number,
    email: string,
    password: string,
    termsAndConditions: boolean,
    createdAt: Date
}

