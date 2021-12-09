import { Route, Routes } from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';

import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="marvel" element={ <MarvelScreen/> }/>
                <Route path="dc" element={ <DcScreen/> }/>

                <Route path="search" element={ <SearchScreen/> }/>

                <Route path="/" element={ <MarvelScreen/> }/>
            </Routes>
        </>
    );
};