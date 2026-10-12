
import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  CalendarDays,
  Inbox,
  LayoutDashboard,
  LogOut,
  Menu,
  Newspaper,
  X,
} from 'lucide-react';
import '../Admin.css';

function AdminNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost/fbc-alumni/backend/check_session.php', {
      credentials: 'include',
    })
      .then(r => r.json())
      .then(data => {
        if (data.loggedIn) setUsername(data.username);
      })
      .catch(err => console.error('Session check failed:', err));
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('http://localhost/fbc-alumni/backend/logout.php', {
        method: 'GET',
        credentials: 'include',
      });
      navigate('/admin/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  const navLinks = [
    { to: '/admin', label: 'Dashboard', Icon: LayoutDashboard },
    { to: '/admin/enquiries', label: 'Enquiries', Icon: Inbox },
    { to: '/admin/updates', label: 'Updates', Icon: Newspaper },
    { to: '/admin/events', label: 'Events', Icon: CalendarDays },
  ];

  const isActive = (path) =>
    path === '/admin'
      ? location.pathname === '/admin' || location.pathname === '/admin/dashboard'
      : location.pathname === path;

  return (
    <header className="admin-sidebar sticky top-0 z-40">
      <div className="admin-sidebar-inner mx-auto max-w-5xl px-4 sm:px-6">
        <div className="admin-sidebar-layout flex h-14 items-center justify-between">

          {/* Brand */}
          <Link to="/admin" className="admin-brand text-sm font-semibold text-gray-900">
            FBC Alumni — Admin
          </Link>

          {/* Desktop nav */}
          <nav className="admin-links items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm transition-colors ${
                  isActive(link.to)
                    ? 'text-green-700 font-semibold border-b-2 border-green-700 pb-0.5'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <link.Icon aria-hidden="true" size={17} strokeWidth={1.8} />
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: user + logout */}
          <div className="admin-account hidden md:flex items-center gap-4">
            {username && (
              <span className="text-xs text-gray-500">{username}</span>
            )}
            <button
              onClick={handleLogout}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut aria-hidden="true" size={15} strokeWidth={1.8} />
              Logout
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="admin-menu-toggle md:hidden p-1.5 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="admin-mobile-menu md:hidden border-t border-gray-200 bg-white px-4 py-3 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm ${
                isActive(link.to)
                  ? 'text-green-700 font-semibold'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <link.Icon aria-hidden="true" size={17} strokeWidth={1.8} />
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
            {username && <span className="text-xs text-gray-500">{username}</span>}
            <button
              onClick={handleLogout}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              <LogOut aria-hidden="true" size={15} strokeWidth={1.8} />
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default AdminNavbar;