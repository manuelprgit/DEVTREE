import { NavLink } from 'react-router-dom'

export const RegisterView = () => {
    return (
        <>
            <h1>register</h1>

            <nav>
                <NavLink to={'/auth/login'}>
                    ¿Ya tienes una cuenta? Inicia sesión
                </NavLink>
            </nav>
        </>
    )
}
