import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import AppLayoutReal from './ui/AppLayoutReal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayoutReal />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/shipments" element={<Dashboard />} />
        </Route>

        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
