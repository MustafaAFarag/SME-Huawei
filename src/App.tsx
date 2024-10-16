import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import AppLayout from './ui/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
