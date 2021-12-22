import { GetHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ( {publisher} ) => {

    const heroes = GetHeroesByPublisher(publisher);

    return (
        <>
            <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grids-cols-4 gap-2 md:gap-4">
                {
                    heroes.map(hero => (
                        <HeroCard
                            key={ hero.id }
                            { ...hero }
                        />
                    ))
                }
            </ul>
        </>
    );
};