import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch('http://localhost/fbc-alumni/backend/check_session.php', {
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        setLoggedIn(data.loggedIn);
        setLoading(false);
      })
      .catch(error => {
        console.error('Session check failed:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-stone-50 text-stone-700">
        <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-fbc-green text-white font-serif font-bold text-xl shadow-xs border border-fbc-green-dark mb-4 animate-pulse">
          <span>FBC</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-stone-500">
          <span className="inline-block h-2 w-2 rounded-full bg-fbc-green animate-ping" />
          <span>Verifying administrator credentials...</span>
        </div>
      </div>
    );
  }

  if (!loggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

export default ProtectedRoute;