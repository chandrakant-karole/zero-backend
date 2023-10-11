import { model, Schema, Document } from "mongoose"

interface User {
    name: string,
    email: string
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
export default UserModel;