import mongoose from 'mongoose'
const { Schema, model } = mongoose

interface IUser {
    username: string,
    email: string,
    password: string,
    sportId: string,
    avatar: string
}

const userSchema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    sportId: String,
    avatar: String
})

const User = model<IUser>('User', userSchema)

export default User
