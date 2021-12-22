import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

    const navigate = useNavigate();

    const handleLogin = () => {

        navigate('/', {
            replace: true
        });

    };

    return (
        <div className="md:container md:mx-auto">
            <h1>Login</h1>
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