import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { types } from '../../types/types';
import { AuthContext } from '../../auth/authContext';

export const LoginScreen = () => {

    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Omar'
            }
        }

        dispatch(action);

        const lastPath = lastPathRecovery()  ?? '/';

        navigate(`${lastPath}`, {
            replace: true
        });


    };

    const lastPathRecovery = () => {
        return localStorage.getItem('lastPath');
    }

    return (
        <div className="md:container md:mx-auto">
            <h1
                className="text-3xl"
            >
                Login
            </h1>
            <hr/>

            <button
                className="rounded-md bg-blue-600 text-white p-3"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    );
};