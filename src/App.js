import AppRoutes from './Routes';
import React from 'react';

import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div>


      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    
    </div>
    
  );
}

export default App;
