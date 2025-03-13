import mongoose, { Schema } from "mongoose";

export interface IUser {
    handle: string;
    name: string;
    password: string;
    email: string;
    description: string;
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
    },
    description: {
        type: String,
        default: ''
    }
});

export const User = mongoose.model<IUser>('User', userSchema);