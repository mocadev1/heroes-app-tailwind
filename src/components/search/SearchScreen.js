import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard';

import useForm from '../../hooks/useForm';

export const SearchScreen = () => {

    const [ searchParams, setSearchParams ] = useSearchParams();

    // Nullish coalescing operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
    const superheroParam = searchParams.get("superhero") ?? '';

    const [ formValues, handleInputChange ] = useForm({
        searchTerm: superheroParam
    });


    const {searchTerm} = formValues;
    /* Nullish coalescing used before, so we can use an empty string as default value in the first render */
    const filteredHeroes = useMemo(() => getHeroesByName(superheroParam), [ superheroParam ]);


    const handleSearch = ( e ) => {
        e.preventDefault();
        setSearchParams({superhero: searchTerm});
    }

    return (
        <>
            <h1
                className="text-3xl"
            >
                Búsquedas
            </h1>

            <hr/>

            <div className="md:flex justify-evenly">
                <div className="md:w-2/5 mt-3">

                    <h4 className="text-2xl mb-3">Buscar</h4>

                    <hr/>

                    <form
                        onSubmit={ handleSearch }
                    >
                        <input
                            type="text"
                            placeholder="Buscar un héroe"
                            className="rounded-lg mt-3 w-full"
                            name="searchTerm"
                            autoComplete="off"
                            value={ searchTerm }
                            onChange={ handleInputChange }
                        />
                        <button
                            type="submit"
                            className="bg-blue-400 text-blue-50 rounded-lg py-2 px-4 mt-5 text-center block w-full"
                        >
                            Buscar
                        </button>
                    </form>
                </div>

                <div className="md:w-2/5 mt-3">
                    <h4
                        className="mb-3 text-2xl"
                    >
                        Resultados
                    </h4>

                    <hr/>

                    <div className="mt-3">

                        {
                            ( superheroParam === '' )
                                ? // Little card when you have not written anything
                                    <div
                                        className="bg-blue-600 rounded-lg
                                         p-3 text-white animate__animated animate__fadeIn"
                                    >
                                        B&uacute;sca el nombre de un s&uacute;perheroe
                                    </div>
                                : ( filteredHeroes.length === 0 )
                                && // Little card when there are no matching heroes with the searchTerm
                                    <div
                                        className="bg-red-600 rounded-lg p-3
                                        text-white animate__animated animate__fadeIn"
                                    >
                                        No hay resultados con "{ superheroParam }"
                                    </div>
                        }

                        {
                            filteredHeroes.map(hero =>
                                ( <HeroCard
                                    key={ hero.id }
                                    { ...hero }/> )
                            )
                        }
                    </div>

                </div>
            </div>
        </>
    );
};