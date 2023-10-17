import { model, Schema } from "mongoose"
import { UserSignup } from "./users.types"
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
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: Date.now()
    }
})

const UserModel = model<UserSignup>('users', userSignup) //first argument is collection name

export default UserModel