import { model, Schema, Document } from "mongoose"

interface User {
    name: string,
    email: string
}

interface UserSignup {
    username: string,
    firstName: string,
    lastName: string,
    contactNumber: number,
    email: string,
    password: string,
    termsAndConditions: boolean
}

const UserSchema = new Schema<User>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const UserModel = model<User>('User', UserSchema)

// ======================== signup ============================
const userSignup = new Schema<UserSignup>({
    username: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String
    },
    contactNumber: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    termsAndConditions: {
        type: Boolean,
        require: true
    }
})

const SignupModel = model<UserSignup>('UserSignup', userSignup)

export { UserModel, SignupModel };