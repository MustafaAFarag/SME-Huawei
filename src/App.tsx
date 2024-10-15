import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import Homepage from './pages/Homepage';
import Applayout from './ui/AppLayout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
