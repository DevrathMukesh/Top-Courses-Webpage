// Spinner.js
import React from 'react';
// import './Spinner.css'; // Ensure you have a CSS file for spinner styles

function Spinner() {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="loader"></div>
      <p className="text-bgDark text-lg font-semibold">Loading...</p>
    </div>
  ); 
}

export default Spinner;
