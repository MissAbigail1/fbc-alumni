import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { login } from '../utils/auth';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/directory';
  const [email, setEmail] = useState('alumni@fbc.org');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError('Enter your alumni email and password to continue.');
      return;
    }

    if (login(email, password)) {
      navigate(from, { replace: true });
      return;
    }

    setError('Unable to sign in. Please use a valid alumni account.');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-fbc-green text-white text-2xl font-black">
            FBC
          </div>
          <h1 className="mt-4 text-2xl font-black text-gray-900">Alumni Login</h1>
          <p className="mt-2 text-sm text-gray-500">
            Sign in to access the protected alumni directory.
          </p>
        </div>

        <div className="rounded-xl border border-fbc-green/20 bg-fbc-green-light px-4 py-3 text-sm text-fbc-green">
          Directory access requires an authenticated FBC alumni account.
        </div>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@fbc.org"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-fbc-green"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-fbc-green"
            />
          </div>

          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-fbc-green text-white font-bold py-3 rounded-lg hover:bg-fbc-green-dark transition-colors"
          >
            Log in to Directory
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => navigate('/signup')}
            className="text-sm font-semibold text-fbc-green hover:underline"
          >
            Create an alumni account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
