import AppRoutes from './Routes';
import { AuthProvider } from './AuthProvider';
import React from 'react';

import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div>

      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    
    </div>
    
  );
}

export default App;
