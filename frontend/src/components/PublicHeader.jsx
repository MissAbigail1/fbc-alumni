import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// Single source of truth for public navigation order.
const NAV_LINKS = [
  { label: 'Home',         path: '/' },
  { label: 'History',      path: '/history' },
  { label: 'Constitution', path: '/constitutional-bylaws' },
  { label: 'Events',       path: '/events' },
  { label: 'Updates',      path: '/updates' },
  { label: 'Directory',    path: '/directory' },
  { label: 'Contact',      path: '/contact' },
];

function PublicHeader({ variant = 'solid', transparent = false }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const isActive = (path) => location.pathname === path;

  const isTransparent = transparent || variant === 'transparent';

  const navClasses = isTransparent
    ? 'flex items-center justify-between px-10 py-1.5 absolute top-0 left-0 right-0 z-50'
    : 'bg-fbc-green flex items-center justify-between px-10 py-1.5 relative z-50 shadow-sm';

  const navStyle = isTransparent
    ? {
        background: 'linear-gradient(to bottom, rgba(4, 65, 42, 0.45), rgba(4, 65, 42, 0.15), transparent)'
      }
    : undefined;

  return (
    <nav className={navClasses} style={navStyle}>

      {/* Logo */}
      <div
        className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-white border border-white/70 overflow-hidden flex items-center justify-center p-1.5 cursor-pointer shadow-sm transition-transform hover:scale-105"
        onClick={() => navigate('/')}
      >
        <img
          src="/fbc-alumni-logo.png"
          alt="FBC Alumni Association Logo"
          className="h-full w-full object-contain object-center drop-shadow-md"
        />
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden lg:flex items-center gap-8">
        {NAV_LINKS.map(link => (
          <button
            key={link.path}
            onClick={() => navigate(link.path)}
            className={`text-base transition-colors ${
              isActive(link.path)
                ? 'text-white font-semibold border-b-2 border-fbc-gold pb-0.5'
                : 'text-white/75 hover:text-white'
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden text-white/80 hover:text-white p-1"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        aria-label="Toggle navigation menu"
      >
        {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Nav Menu */}
      {showMobileMenu && (
        <div className="absolute top-full left-0 right-0 bg-fbc-green border-t border-white/10 lg:hidden shadow-lg p-5 flex flex-col gap-4 z-40 max-h-[85vh] overflow-y-auto">
          {NAV_LINKS.map(link => (
            <button
              key={link.path}
              onClick={() => { navigate(link.path); setShowMobileMenu(false); }}
              className={`text-left font-medium py-2 px-2 transition-colors border-l ${
                isActive(link.path)
                  ? 'text-white border-fbc-gold'
                  : 'text-white/80 border-transparent hover:text-white hover:border-white/20'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

    </nav>
  );
}

export default PublicHeader;
