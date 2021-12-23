import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

    const {heroId} = useParams();
    const navigate = useNavigate();

    const hero = useMemo(() => getHeroById(heroId), [ heroId ]);

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    if ( !hero ) {
        return <Navigate to="/"/>;
    }

    const imagePath = `/assets/${ id }.jpg`;

    const handleReturn = () => {
        navigate(-1); // Go back to last visited page
    }

    return (
        <div className="container my-5 flex">

            <div
                className="border-2 border-gray-400 p-3 md:w-1/4 rounded-2xl animate__animated animate__fadeInLeft"
            >
                <img
                    src={ imagePath }
                    alt={ superhero }
                    className=" rounded-2xl object-cover h-full"
                />
            </div>

            <div className="w-3/4 mt-3 ml-5 animate__animated animate__fadeIn">
                <h3
                    className="text-2xl"
                >
                    { superhero }
                </h3>

                <ul className="mt-5">
                    <li
                        className="border-b-2 mb-1 py-2"
                    >
                        <b>Alter ego: </b> { alter_ego }
                    </li>
                    <li
                        className="border-b-2 mb-1 py-2"
                    >
                        <b>Publisher: </b> { publisher }
                    </li>
                    <li
                        className="border-b-2 mb-1 py-2"
                    >
                        <b>First Appearance: </b> { first_appearance }
                    </li>
                </ul>

                <h5 className="text-xl mt-3">
                    Characters
                </h5>
                <p>{ characters }</p>

                <button
                    className="bg-blue-400 text-blue-50 rounded-lg py-2 px-4
                                mt-5 text-center block w-full md:w-auto"
                    onClick={ handleReturn }
                >
                    Regresar
                </button>
            </div>

        </div>
    );
};