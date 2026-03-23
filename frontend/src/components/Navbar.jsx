import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [readNotifications, setReadNotifications] = useState([]);

  const notifications = [
    { id: 1, type: 'contact', text: 'Aminata Koroma sent you a contact request', time: '2 min ago', unread: true },
    { id: 2, type: 'event', text: 'FBC Networking Night is tomorrow — you RSVPd!', time: '1 hr ago', unread: true },
    { id: 3, type: 'alumni', text: 'James Sesay just joined the alumni network', time: '3 hrs ago', unread: true },
    { id: 4, type: 'news', text: 'New article: FBC 200th Anniversary Gala announced', time: '1 day ago', unread: false },
    { id: 5, type: 'contact', text: 'Dr. David Tucker accepted your contact request', time: '2 days ago', unread: false },
  ];

  const unreadCount = notifications.filter(n =>
    n.unread && !readNotifications.includes(n.id)
  ).length;

  const navLinks = [
    { label: 'Home', path: '/feed' },
    { label: 'Directory', path: '/directory' },
    { label: 'Events', path: '/events' },
    { label: 'Give back', path: '/donate' },
    { label: 'News', path: '/news' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-fbc-green flex items-center justify-between px-10 py-4 relative z-50">

      {/* Logo */}
      <img
        src="/fbc-alumni-logo.png"
        alt="FBC Alumni Logo"
        className="h-16 w-auto object-contain cursor-pointer"
        onClick={() => navigate('/')}
      />

      {/* Nav Links */}
      <div className="flex items-center gap-8">
        {navLinks.map(link => (
          <button
            key={link.path}
            onClick={() => navigate(link.path)}
            className={`text-sm transition-colors ${
              isActive(link.path)
                ? 'text-white font-semibold border-b-2 border-fbc-gold pb-0.5'
                : 'text-white/75 hover:text-white'
            }`}>
            {link.label}
          </button>
        ))}
      </div>

      {/* Right — Bell & Avatar */}
      <div className="flex items-center gap-4">

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfile(false);
            }}
            className="relative text-white/80 hover:text-white transition-colors p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 top-10 w-80 bg-white rounded-2xl shadow-card-hover border border-gray-100 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <span className="text-sm font-bold text-gray-900">Notifications</span>
                <button
                  onClick={() => setReadNotifications(notifications.map(n => n.id))}
                  className="text-xs text-fbc-green hover:underline">
                  Mark all read
                </button>
              </div>
              <div className="flex flex-col max-h-80 overflow-y-auto">
                {notifications.map(n => (
                  <div
                    key={n.id}
                    onClick={() => setReadNotifications(prev => [...prev, n.id])}
                    className={`flex items-start gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-50
                      ${n.unread && !readNotifications.includes(n.id) ? 'bg-fbc-green-light' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0
                      ${n.type === 'contact' ? 'bg-blue-100' :
                        n.type === 'event' ? 'bg-amber-100' :
                        n.type === 'alumni' ? 'bg-green-100' : 'bg-purple-100'}`}>
                      {n.type === 'contact' ? '👤' :
                       n.type === 'event' ? '📅' :
                       n.type === 'alumni' ? '🎓' : '📰'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-gray-700 leading-snug">{n.text}</div>
                      <div className="text-xs text-gray-400 mt-1">{n.time}</div>
                    </div>
                    {n.unread && !readNotifications.includes(n.id) && (
                      <div className="w-2 h-2 bg-fbc-green rounded-full flex-shrink-0 mt-1"></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="px-4 py-3 text-center border-t border-gray-100">
                <button className="text-xs text-fbc-green font-semibold hover:underline">
                  See all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profile Avatar */}
        <div className="relative">
          <button
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotifications(false);
            }}
            className="flex items-center gap-2 cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-fbc-gold flex items-center justify-center text-white text-xs font-bold">
              AK
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Profile Dropdown */}
          {showProfile && (
            <div className="absolute right-0 top-12 w-48 bg-white rounded-2xl shadow-card-hover border border-gray-100 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100">
                <div className="text-sm font-semibold text-gray-900">Aminata Koroma</div>
                <div className="text-xs text-gray-500">Class of 2022 · Economics</div>
              </div>
              <div className="flex flex-col py-1">
                {[
                  { label: 'View profile', icon: '👤' },
                  { label: 'Edit profile', icon: '✏️' },
                  { label: 'Settings', icon: '⚙️' },
                ].map((item, i) => (
                  <button key={i} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left">
                    <span className="text-base" style={{fontSize: '14px'}}>{item.icon}</span>
                    {item.label}
                  </button>
                ))}
                <div className="border-t border-gray-100 mt-1 pt-1">
                  <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors w-full text-left">
                    <span style={{fontSize: '14px'}}>🚪</span>
                    Log out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </nav>
  );
}

export default Navbar;