import React from 'react';
import type { RouteObject } from 'react-router-dom';

import Home from '@/views/Home';
import MovieList from '@/views/MovieList';

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/movies', element: <MovieList /> },
];

export default routes;
