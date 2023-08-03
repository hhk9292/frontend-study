import React from 'react';
import type { RouteObject } from 'react-router-dom';

import Home from '@/views/Home';
import Keyboard from '@keyboard/views/Keyboard';

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/keyboard', element: <Keyboard /> },
];

export default routes;
