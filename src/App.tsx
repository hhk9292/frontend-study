import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import './reset.css'

import routes from '@/routes';

const Router = () => {
  const router = useRoutes(routes);
  return <>{router}</>;
};

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;
