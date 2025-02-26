import { NavLink } from "react-router-dom"
export const LoginView = () => {
    return (
        <>
            <h1 className="text-4xl font-bold text-white">Login</h1>
            <nav className="mt-10">
                <NavLink
                    className="text-lg text-white"
                    to={'/auth/register'}>
                    ¿Aun no tienes cuenta? Regístrate aquí
                </NavLink>
            </nav>
        </>
    )
}
