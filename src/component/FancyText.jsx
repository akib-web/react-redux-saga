import React, { useState } from 'react';
import '../App.css';

export const FancyText = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="App" style={{display:'flex'}}>
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        Hover over me!
      </button>
      {isShown && (
        <div>
          I'll appear when you hover over the button.
        </div>
      )}
    </div>
  );
}

export default FancyText;