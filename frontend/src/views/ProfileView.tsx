import { useForm } from 'react-hook-form'
import { ErrorMessages } from '../components/ErrorMessages'
import { TLoginView } from '../types'

export function ProfileView() {

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { handle: '', description: '' } })

    const handleUserProfileForm = (formData) => {
        console.log(formData)
    }

    return (
        <form
            className="bg-white p-10 rounded-lg space-y-5"
            onSubmit={handleSubmit(handleUserProfileForm)}
        >
            <legend className="text-2xl text-slate-800 text-center">Editar Información</legend>
            <div className="grid grid-cols-1 gap-2 relative">
                <label
                    htmlFor="handle"
                >Usuario:</label>
                <input
                    type="text"
                    className="border-none bg-slate-100 rounded-lg p-2"
                    placeholder="Nombre de Usuario"
                    {...register('handle', {
                        required: 'El usuario es requerido'
                    })}
                />
                {errors.handle && <ErrorMessages>{errors.handle.message}</ErrorMessages>}
            </div>

            <div className="grid grid-cols-1 gap-2 relative">
                <label
                    htmlFor="description"
                >Descripción:</label>
                <textarea
                    className="border-none bg-slate-100 rounded-lg p-2"
                    placeholder="Tu Descripción"
                    {...register('description')}
                />
            </div>

            <div className="grid grid-cols-1 gap-2 relative">
                <label
                    htmlFor="handle"
                >Imagen:</label>
                <input
                    id="image"
                    type="file"
                    name="handle"
                    className="border-none bg-slate-100 rounded-lg p-2"
                    accept="image/*"
                    onChange={() => { }}
                />
            </div>

            <input
                type="submit"
                className="bg-cyan-400 p-2 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
                value='Guardar Cambios'
            />
        </form>
    )
}
