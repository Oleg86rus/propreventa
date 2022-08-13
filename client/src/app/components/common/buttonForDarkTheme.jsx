import React, { useState } from 'react';
import DarkTheme from '../ui/darkTheme';

const ButtonForDarkTheme = () => {
  const {theme, setTheme} = DarkTheme();
  const [enabled, setEnabled] = useState(false);
  
  const handleDarkThemeClick = () => {
    if (theme === 'light') {
      setTheme('dark');
      
    }
    if (theme === 'dark') {
      setTheme('light');
    }
    setEnabled(!enabled);
  };
  
  return (
    <div className="ml-16 relative flex flex-col items-center justify-center overflow-hidden">
      <div className="flex">
        <label class="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
          <div
            onClick={() => handleDarkThemeClick()}
            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-amber-900  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-900"
          ></div>

        </label>
      </div>
    </div>
  );
};

export default ButtonForDarkTheme;