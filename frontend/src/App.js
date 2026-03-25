import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Directory from './pages/Directory';
import Events from './pages/Events';
import Donate from './pages/Donate';
import Chapters from './pages/Chapters';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/events" element={<Events />} />
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/chapters/:id" element={<Chapters />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;