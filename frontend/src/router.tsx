import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginView } from './views/LoginView';
import { RegisterView } from './views/RegisterView';
import { AuthLayout } from './layout/AuthLayout';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path='/auth/login' element={<LoginView />}></Route>
                    <Route path='/auth/register' element={<RegisterView />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

