import React, { useEffect, useLayoutEffect, useState } from 'react';

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';

const DarkTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || defaultTheme);
  useLayoutEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);
  return {theme, setTheme};
};

export default DarkTheme;