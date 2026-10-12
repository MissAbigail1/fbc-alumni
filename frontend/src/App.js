
import AdminUpdates from './pages/AdminUpdates';
import UpdateDetails from './pages/UpdateDetails';
import ProtectedRoute from './components/ProtectedRoute';
import AdminEnquiries from './pages/AdminEnquiries';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import AdminEvents from './pages/AdminEvents';
import Chapters from './pages/Chapters';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import PublicHeader from './components/PublicHeader';
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
import Updates from './pages/Updates';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { features } from './config/features';

// Public routes receive PublicHeader and shared Footer.
const PUBLIC_PATHS = [
  '/',
  '/history',
  '/constitutional-bylaws',
  '/events',
  '/updates',
  '/directory',
  '/contact',
  '/login'
];

function Layout() {
  const location = useLocation();

  const isPublicRoute = PUBLIC_PATHS.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">

      {/* Public header */}
      {isPublicRoute && (
        <PublicHeader
          variant={location.pathname === '/' ? 'transparent' : 'solid'}
        />
      )}

      <div className="flex-grow">
        <Routes>

          {/* PUBLIC PAGES */}
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />

          <Route
            path="/constitutional-bylaws"
            element={<ConstitutionalBylaws />}
          />

          <Route path="/events" element={<Events />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/updates/:id" element={<UpdateDetails />} />
          <Route path="/contact" element={<Contact />} />

          {/* FEATURE-GATED PAGES */}
          <Route
            path="/chapters"
            element={features.chaptersPage ? <Chapters /> : <NotFound />}
          />

          <Route
            path="/chapters/:id"
            element={features.chaptersPage ? <Chapters /> : <NotFound />}
          />

          <Route
            path="/signup"
            element={features.joinNow ? <Signup /> : <NotFound />}
          />

          <Route path="/sign up" element={<Navigate to="/signup" replace />} />
          <Route path="/sign-up" element={<Navigate to="/signup" replace />} />

          <Route path="/login" element={<Login />} />

          <Route
            path="/directory"
            element={features.directory ? <Directory /> : <NotFound />}
          />

          <Route
            path="/donate"
            element={features.giveBack ? <Donate /> : <NotFound />}
          />

          {/* MEMBER / INTERNAL PAGES */}
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/settings" element={<Settings />} />

          {/* ADMIN LOGIN */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* ADMIN DASHBOARD */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* ADMIN ENQUIRIES */}
          <Route
            path="/admin/enquiries"
            element={
              <ProtectedRoute>
                <AdminEnquiries />
              </ProtectedRoute>
            }
          />

          {/* ADMIN UPDATES */}
          <Route
            path="/admin/updates"
            element={
              <ProtectedRoute>
                <AdminUpdates />
              </ProtectedRoute>
            }
          />

          {/* ADMIN EVENTS */}
          <Route
            path="/admin/events"
            element={
              <ProtectedRoute>
                <AdminEvents />
              </ProtectedRoute>
            }
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>

      {/* Footer on public pages */}
      {isPublicRoute && <Footer />}

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