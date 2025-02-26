import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
    return (
        <>
            <div className='bg-slate-800 min-h-screen'>
                <div className='max-w-lg mx-auto mp-10 px-5'>
                    <img src="/logo.svg" alt="Logotipo" />

                    <div className='py-10 '>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
