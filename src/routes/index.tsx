import React from 'react';
import type { RouteObject } from 'react-router-dom';

import Home from '@/views/Home';
import VirtualKeyboard from '@/views/VirtualKeyboard';

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/keyboard', element: <VirtualKeyboard /> },
];

export default routes;
