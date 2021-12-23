import { Link } from 'react-router-dom';

export const HeroCard = ( {
                              id,
                              superhero,
                              alter_ego,
                              first_appearance,
                              characters
                          } ) => {

    const imagePath = `/assets/${ id }.jpg`;

    return (
        <li
            className="border-2 border-gray-200 shadow-md rounded-md p-3 flex items-center"
        >

            { /* Card Image*/ }
            <img src={ imagePath } alt={ superhero }
                 className="rounded-lg h-40 w-1/3 object-cover"
            />

            { /* Card body */ }
            <div
                className="m-3 w-2/3"
            >
                <h5 className="font-black " >
                    { superhero }
                </h5>

                <p className="mt-3 ">
                    { alter_ego }
                </p>

                {
                    ( alter_ego !== characters )
                    && <p className="font-light ">{ characters }</p>
                }

                <p className="text-xs py-3 ">
                    <small>{ first_appearance }</small>
                </p>

                <Link to={ `/hero/${ id }` }
                      className="bg-blue-400 text-blue-50 rounded-lg py-2 px-4 mt-5 text-center block"

                >
                    M&aacute;s...
                </Link>
            </div>

        </li>
    );
};