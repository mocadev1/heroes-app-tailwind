import { useEffect, useReducer } from 'react';

import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';


const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {logged: false};
}


export const HeroesApp = () => {

    const [ user, dispatch ] = useReducer(authReducer, {}, init);

    useEffect(() => {
        if (!user) return; // Does it have any sense? user always has something

        localStorage.setItem('user', JSON.stringify(user))
    }, [ user ]);


    return (
        <AuthContext.Provider value={ {
            user,
            dispatch
        } }>
            <AppRouter/>
        </AuthContext.Provider>
    );
};
