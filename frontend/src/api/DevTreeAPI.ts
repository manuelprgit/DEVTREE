import { isAxiosError } from "axios";
import { api } from "../config/axios"
import { TProfileForm, TUser } from "../types";

export const getUser = async () => {
    try {
        const { data } = await api<TUser>('user');
        return data;
        
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message);
        }
    }
}


export const updateProfile = async (formData: TProfileForm) => {
    try {
        const { data } = await api.patch('user', formData);
        return data;        
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message);
        }
    }
}