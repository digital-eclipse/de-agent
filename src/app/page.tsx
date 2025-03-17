'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Hardcoded user credentials
const users = [
  { username: 'Jess', password: 'jess123!@#' },
  { username: 'Josie', password: 'josie@@@222' },
  { username: 'Joe', password: 'joe!!@@##' },
  { username: 'Wenky', password: 'wenky321#@!' },
  { username: 'Test', password: 'tester@@' },
];

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the entered credentials match any user
    const user = users.find(
      (u) => u.username === username && u.password === password,
    );

    if (user) {
      // Store the logged-in user's username in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', user.username);
      router.push('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  // Check if the user is already logged in (client-side only)
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      router.push('/dashboard'); // Redirect to the dashboard if already logged in
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF3DF]">
      <div className="bg-black p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Agent Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-white">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-white text-black py-2 px-4 rounded-md hover:bg-[#FFF3DF] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}