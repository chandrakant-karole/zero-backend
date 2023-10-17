import { ObtainDocumentType, FilterQuery, UpdateQuery, QueryOptions } from 'mongoose'
import UserModel, { UserDocument } from '~@src/models/users'

//adding new user
export function createUser(input: ObtainDocumentType<UserDocument>) {
    return UserModel.create(input)
}

//finding user 
export function findUser(query: FilterQuery<UserDocument>, options: QueryOptions = { lean: true }) {
    return UserModel.find(query, {}, options)
}

//finding user and update details
export function findAndUpdate(query: FilterQuery<UserDocument>, update: UpdateQuery<UserDocument>, options: QueryOptions) {
    return UserModel.findOneAndUpdate(query, update, options)
}

//deleting user
export function deleteUser(query: FilterQuery<UserDocument>) {
    return UserModel.deleteOne(query)
}