import useForm from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard';
import { useSearchParams } from 'react-router-dom';

export const SearchScreen = () => {

    const [ searchParams, setSearchParams ] = useSearchParams();

    // Nullish coalescing operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
    const superhero = searchParams.get("superhero") ?? '';

    const [ formValues, handleInputChange ] = useForm({
        searchTerm: superhero
    });


    const {searchTerm} = formValues;
    /* Nullish coalescing used before, so we can use an empty string as default value in the first render */
    const filteredHeroes = getHeroesByName(superhero);


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