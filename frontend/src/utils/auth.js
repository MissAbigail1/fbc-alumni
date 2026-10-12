export const AUTH_SESSION_KEY = 'fbc_auth_session';

export function isAuthenticated() {
  if (typeof window === 'undefined') return false;
  return Boolean(localStorage.getItem(AUTH_SESSION_KEY));
}

export function login(email, password) {
  if (typeof window === 'undefined') return false;
  if (!email || !password) return false;

  localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify({
    email,
    name: email.split('@')[0],
    loggedInAt: new Date().toISOString(),
  }));

  return true;
}

export function logout() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(AUTH_SESSION_KEY);
}
