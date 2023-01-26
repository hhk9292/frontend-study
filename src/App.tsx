import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Router from '@/components/Router';

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
