import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { LoginScreen } from '../components/login/LoginScreen';

import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/login" element={
                    <PublicRoutes>
                        <LoginScreen />
                    </PublicRoutes>
                    }
                />

                <Route path="/*" element={
                    <PrivateRoutes>
                        <DashboardRoutes />
                    </PrivateRoutes>
                }/>

            </Routes>
        </BrowserRouter>
    );
};