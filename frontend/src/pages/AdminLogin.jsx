
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import '../Admin.css';

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'http://localhost/fbc-alumni/backend/login.php',
        {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ username, password }),
        }
      );
      const result = await response.text();
      const cleanResult = result.trim();
      setMessage(cleanResult);
      if (cleanResult === 'Login successful!') {
        navigate('/admin');
      }
    } catch (error) {
      console.error(error);
      setMessage('Unable to connect to the server.');
    }
  };

  const isSuccess = message === 'Login successful!';

  return (
    <div className="admin-login-page min-h-screen flex items-center justify-center px-4">
      <div className="admin-login-wrap w-full max-w-sm">

        <div className="admin-login-heading text-center mb-8">
          <h1 className="text-xl font-semibold text-gray-900">
            FBC Alumni Administration
          </h1>
          <p className="mt-1 text-sm text-gray-500">Sign in to continue</p>
        </div>

        <div className="admin-login-card bg-white border border-gray-200 p-8">
          <form onSubmit={handleLogin} className="space-y-5">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700"
              />
            </div>

            {message && (
              <p className={`text-sm ${isSuccess ? 'text-green-700' : 'text-red-600'}`}>
                {message}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2.5 text-sm font-medium hover:bg-green-800 transition-colors"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ExternalLink aria-hidden="true" size={14} strokeWidth={1.8} />
              ← Back to alumni website
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AdminLogin;