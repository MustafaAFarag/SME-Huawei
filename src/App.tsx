import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
