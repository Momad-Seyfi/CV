import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';

// Function to get and set the theme from localStorage
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? savedTheme : 'light'; // Default to 'light' if no theme is saved
};

const AppWithTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    // Set the data-theme attribute on the body element to switch themes
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); // Save the user's theme choice
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <App />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppWithTheme />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
