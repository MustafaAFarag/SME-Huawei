import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import AppLayoutReal from './ui/AppLayoutReal';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import Signup from './pages/Signup';
import Login from './pages/Login';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayoutReal />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/shipments" element={<Dashboard />} />
          </Route>

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              backgroundColor: '#d4edda',
              color: '#155724',
              border: '1px solid #c3e6cb',
            },
          },
          error: {
            duration: 5000,
            style: {
              backgroundColor: '#f8d7da',
              color: '#721c24',
              border: '1px solid #f5c6cb',
            },
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
