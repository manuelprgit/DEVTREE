import { isAxiosError } from "axios";
import { api } from "../config/axios"

export const getUser = async () => {
    try {
        const { data } = await api('user');
        console.log(data)
        
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message);
        }
    }
}