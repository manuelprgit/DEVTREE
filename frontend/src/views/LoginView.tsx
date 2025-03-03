import { NavLink } from "react-router-dom"
import { ErrorMessages } from '../components/ErrorMessages';
import { useForm } from 'react-hook-form'
import { TLoginView } from "../types";
import { api } from "../config/axios";
import { isAxiosError } from "axios";
import { toast } from "sonner";

export const LoginView = () => {

    const defaultValues = {
        email: "",
        password: ""
    }

    const { register, handleSubmit, formState: { errors } } = useForm<TLoginView>({ defaultValues })

    const handleLogin = async (formData: TLoginView) => {
        try {
            const { data } = await api.post('auth/login', formData)
            toast(data)
            localStorage.setItem('LOGIN_TOKEN', data)
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                toast.error(error.response.data.message)
            }
        }
    }

    return (
        <>
            <h1 className="text-4xl text-center font-bold text-white">Login</h1>
            <form
                onSubmit={handleSubmit(handleLogin)}
                className="bg-white px-5 py-10  rounded-lg space-y-10 mt-10"
                noValidate
            >
                <div className="grid grid-cols-1 space-y-3 relative mb-6">
                    <label htmlFor="email" className="text-2xl text-slate-500">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de Registro"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('email', {
                            required: 'El Email es obligatorio',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "E-mail no válido",
                            },
                        })}
                    />
                    {errors.email && (
                        <ErrorMessages>{errors.email.message}</ErrorMessages>
                    )}
                </div>
                <div className="grid grid-cols-1 space-y-3 relative mb-6">
                    <label htmlFor="password" className="text-2xl text-slate-500">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password de Registro"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register("password", {
                            required: "El Password es obligatorio",
                        })}
                    />
                    {errors.password && (
                        <ErrorMessages>{errors.password.message}</ErrorMessages>
                    )}
                </div>

                <input
                    type="submit"
                    className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
                    value='Iniciar Sesión'
                />
            </form>
            <nav className="mt-10 text-center">
                <NavLink
                    className="text-lg text-white"
                    to={'/auth/register'}>
                    ¿Aun no tienes cuenta? Regístrate aquí
                </NavLink>
            </nav>
        </>
    )
}
