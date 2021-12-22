import { HeroList } from '../heroes/HeroList';

export const MarvelScreen = () => {

    const PUBLISHER = 'Marvel Comics';

    return (
        <div>
            <h1>MarvelScreen</h1>

            <hr/>

            <HeroList publisher={PUBLISHER}/>
        </div>
    );
};