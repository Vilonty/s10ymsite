import AppRoutes from './Routes';
import { AuthProvider } from './AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'
import { store } from './store/store.js'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 минут
      cacheTime: 1000 * 60 * 10, // 10 минут
    },
  },
});


function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <div>

            <AuthProvider>
              <BrowserRouter>
                <Provider store={store}>
                  <AppRoutes />
                </Provider>
              </BrowserRouter>
            </AuthProvider>
          
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    
  );
}

export default App;
