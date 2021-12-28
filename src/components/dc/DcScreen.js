import { HeroList } from '../heroes/HeroList';

export const DcScreen = () => {

    const PUBLISHER = 'DC Comics';

    return (
        <div>
            <h1
                className="text-3xl"
            >
                DCScreen
            </h1>

            <hr/>

            <HeroList publisher={ PUBLISHER }/>
        </div>
    );
};