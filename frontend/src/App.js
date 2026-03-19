import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './pages/News';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Directory from './pages/Directory';
import Events from './pages/Events';
import Donate from './pages/Donate';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/events" element={<Events />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;