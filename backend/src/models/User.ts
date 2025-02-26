import mongoose, { Schema } from "mongoose";

interface IUser {
    handle: string;
    name: string;
    password: string;
    email: string;
}

const userSchema = new Schema({
    handle: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    name: {
        type: String,
        require: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    }
});

export const User = mongoose.model<IUser>('User', userSchema);