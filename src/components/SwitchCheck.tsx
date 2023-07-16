'use client'
import React, { useState } from 'react';

function SwitchCheck() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative inline-block w-10 mr-2 align-middle select-none">
        <input
          type="checkbox"
          className="absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer focus:outline-none checked:bg-blue-500 checked:right-0 transition-transform duration-300 ease-in"
          checked={isSwitchOn}
          onChange={handleSwitchChange}
        />
        <label
          htmlFor="toggle"
          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
        ></label>
      </div>
    </div>
  );
}

export default SwitchCheck;
