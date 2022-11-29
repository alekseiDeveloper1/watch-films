import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddPage from '../pages/AddPage';
import FavoritePage from '../pages/FavoritePage';
import HomePage from '../pages/HomePage';
import FilmPage from '../pages/FilmPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/favorite'} element={<FavoritePage/>}/>
            <Route path={'/add'} element={<AddPage/>}/>
            <Route path={'/:id'} element={<FilmPage/>}/>
        </Routes>
    );
};

export default AppRouter;