import { NavLink } from "react-router-dom"
export const LoginView = () => {
    return (
        <>
            <h1>Login</h1>

            <nav>
                <NavLink to={'/auth/register'}>
                    ¿Aun no tienes cuenta? Regístrate aquí
                </NavLink>
            </nav>
        </>
    )
}
