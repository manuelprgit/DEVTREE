import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginView } from './views/LoginView';
import { RegisterView } from './views/RegisterView';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/auth/login' element={<LoginView />}></Route>
                <Route path='/auth/register' element={<RegisterView />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

