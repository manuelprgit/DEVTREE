import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ErrorMessages } from '../components/ErrorMessages';


export const RegisterView = () => {

    const { register, watch, handleSubmit, formState: { errors } } = useForm();

    console.log(errors)

    const handleRegister = () => {
        console.log('desde aqui')
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
                    <p className='absolute bottom-[-15px] text-red-500'>{errors.name && String(errors.name?.message)}</p>
                </div>
                <div className="grid grid-cols-1 space-y-3 relative mb-6">
                    <label htmlFor="email" className="text-2xl text-slate-500">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de Registro"
                        className="bg-slate-300 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('email', {
                            required: 'El Email es obligatorio'
                        })}
                    />
                    <p className='absolute bottom-[-15px] text-red-500'>{errors.email && String(errors.email?.message)}</p>

                </div>
                <div className="grid grid-cols-1 space-y-3 relative mb-6">
                    <label htmlFor="handle" className="text-2xl text-slate-500">Handle</label>
                    <input
                        id="handle"
                        type="text"
                        placeholder="Nombre de usuario: sin espacios"
                        className="bg-slate-300 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('handle', {
                            required: 'el Handle es obligatorio'
                        })}
                    />
                    <p className='absolute bottom-[-15px] text-red-500'>{errors.handle && String(errors.handle?.message)}</p>

                </div>
                <div className="grid grid-cols-1 space-y-3 relative mb-6">
                    <label htmlFor="password" className="text-2xl text-slate-500">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password de Registro"
                        className="bg-slate-300 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('password', {
                            required: 'El Password es obligatorio'
                        })}
                    />
                    <p className='absolute bottom-[-15px] text-red-500'>{errors.password && String(errors.password?.message)}</p>

                </div>

                <div className="grid grid-cols-1 space-y-3 relative mb-10">
                    <label htmlFor="password_confirmation" className="text-2xl text-slate-500">Repetir Password</label>
                    <input
                        id="password_confirmation"
                        type="password"
                        placeholder="Repetir Password"
                        className="bg-slate-300 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('password_confirmation', {
                            required: 'Este Password también es obligatorio'
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
