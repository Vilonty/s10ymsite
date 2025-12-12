import AppRoutes from './route/Routes';  
import { AuthProvider } from './providers/AuthProvider';  
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './providers/store.js'; 
import { Header } from '../widgets/Header/Header.jsx';
import { Footer } from '../widgets/Footer/Footer.jsx';

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
      <AuthProvider>
        <BrowserRouter>
          <Provider store={store}>
            <Header />
            <main>
              <AppRoutes />
            </main>
            <Footer />
          </Provider>
        </BrowserRouter>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;