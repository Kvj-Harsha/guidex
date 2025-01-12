'use client'; // Add this at the top for a Client Component

import { useState } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-between p-6 ${
        isDarkMode
          ? 'bg-gray-900 text-gray-100'
          : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight">Guidex</h1>
        <p className="text-lg">
          Explore the following guides:
        </p>
        <div className="space-y-4">
          <a
            href="/flexbox"
            className="block text-xl font-medium text-blue-600 hover:text-blue-800 transition"
          >
            Flexbox Guide
          </a>
          <a
            href="/layouts"
            className="block text-xl font-medium text-blue-600 hover:text-blue-800 transition"
          >
            Layouts Guide
          </a>
          <a
            href="/typography"
            className="block text-xl font-medium text-blue-600 hover:text-blue-800 transition"
          >
            Typography Guide
          </a>
        </div>
        <button
          className={`px-3 py-1 ${
            isDarkMode
              ? 'bg-gray-800 text-gray-100 hover:bg-gray-700'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          } text-lg font-semibold rounded-lg shadow-md transition`}
          onClick={toggleTheme}
        >
           {isDarkMode ? 'Light' : 'Dark'} Theme
        </button>
      </div>

      <footer className="w-full text-center mt-6">
        <p className="text-sm">
          Made with ❤️ by callmekvj.{' '}
          <a
            href="https://github.com/callmekvj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            GitHub
          </a>
        </p>
      </footer>
    </section>
  );
}
