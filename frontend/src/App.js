import Chapters from './pages/Chapters';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Signup from './pages/Signup';
import About from './pages/About';
import ConstitutionalBylaws from './pages/ConstitutionalBylaws';
import History from './pages/History';
import Directory from './pages/Directory';
import Events from './pages/Events';
import Donate from './pages/Donate';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Settings from './pages/Settings';


// Helper component to decide where footer shows
function Layout() {
  const location = useLocation();
  const showFooter = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Routes>
          <Route path="/chapters" element={<Chapters />} />
          <Route path="/chapters/:id" element={<Chapters />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/constitutional-bylaws" element={<ConstitutionalBylaws />} />
          <Route path="/history" element={<History />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      {showFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;