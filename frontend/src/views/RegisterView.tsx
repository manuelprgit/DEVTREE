import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { isAxiosError } from 'axios';
import { TRegisterForm } from '../types';
import { toast } from 'sonner';
import { ErrorMessages } from '../components/ErrorMessages';
import { api } from '../config/axios';


export const RegisterView = () => {

    const defaultValues: TRegisterForm = {
        name: '',
        email: '',
        handle: '',
        password: '',
        password_confirmation: '',
    }

    const { register, watch, reset, handleSubmit, formState: { errors } } = useForm<TRegisterForm>({ defaultValues });

    const password = watch('password');

    const handleRegister = async (registerForm: TRegisterForm) => {
        try {
            const { data } = await api.post(`auth/register`, registerForm);
            console.log(data)
            reset()
            toast.success(data.message);

        } catch (error: any) {
            if (isAxiosError(error) && error.response) {
                toast.error(error.response.data.message)
            }
        }

    }

    return (
        <>
            <h1 className='text-4xl font-bold text-white'>Crear Cuenta</h1>
            <form
                onSubmit={handleSubmit(handleRegister)}
                className="bg-white px-5 py-10 rounded-lg space-y-10 mt-10"
            >
                <div className="grid grid-cols-1 space-y-3 relative mb-6">
                    <label htmlFor="name" className="text-2xl text-slate-500">Nombre</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Tu Nombre"
                        className="bg-slate-300 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register("name", {
                            required: 'El Nombre es obligatorio'
                        })}
                    />
                    {errors.name && <ErrorMessages>{errors.name?.message}</ErrorMessages>}

                </div>
                <div className="grid grid-cols-1 space-y-3 relative mb-6">
                    <label htmlFor="email" className="text-2xl text-slate-500">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de Registro"
                        className="bg-slate-300 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('email', {
                            required: 'El Email es obligatorio',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "El formato del correo no es valido"
                            }
                        })}
                    />
                    {errors.email && <ErrorMessages>{errors.email?.message}</ErrorMessages>}


                </div>
                <div className="grid grid-cols-1 space-y-3 relative mb-6">
                    <label htmlFor="handle" className="text-2xl text-slate-500">Usuario</label>
                    <input
                        id="handle"
                        type="text"
                        placeholder="Nombre de usuario: sin espacios"
                        className="bg-slate-300 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('handle', {
                            required: 'el Handle es obligatorio'
                        })}
                    />
                    {errors.handle && <ErrorMessages>{errors.handle?.message}</ErrorMessages>}


                </div>
                <div className="grid grid-cols-1 space-y-3 relative mb-6">
                    <label htmlFor="password" className="text-2xl text-slate-500">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password de Registro"
                        className="bg-slate-300 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('password', {
                            required: 'El Password es obligatorio',
                            minLength: {
                                value: 8,
                                message: 'La contrasenia debe de tener minimo 8 caracteres'
                            }
                        })}
                    />

                    {errors.password && <ErrorMessages>{errors.password?.message}</ErrorMessages>}


                </div>

                <div className="grid grid-cols-1 space-y-3 relative mb-10">
                    <label htmlFor="password_confirmation" className="text-2xl text-slate-500">Repetir Password</label>
                    <input
                        id="password_confirmation"
                        type="password"
                        placeholder="Repetir Password"
                        className="bg-slate-300 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('password_confirmation', {
                            required: 'Este Password también es obligatorio',
                            validate: (value) => value === password || 'Las contrasenias no coinciden'
                        })}
                    />

                    {errors.password_confirmation && <ErrorMessages>{errors.password_confirmation?.message}</ErrorMessages>}

                </div>

                <input
                    type="submit"
                    className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
                    value='Crear Cuenta'
                />
            </form>
            <nav className='mt-10 text-white'>
                <NavLink
                    className="text-lg"
                    to={'/auth/login'}
                >
                    ¿Ya tienes una cuenta? Inicia sesión
                </NavLink>
            </nav>
        </>
    )
}
