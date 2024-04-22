import React, { useEffect } from 'react';

const GyroscopePhone = () => {
  useEffect(() => {
    const handleOrientation = (event) => {
      const alpha = event.alpha || 0;
      const beta = event.beta || 0;
      const gamma = event.gamma || 0;

      // Normalize gamma value between -90 and 90 degrees
      const normalizedGamma = (gamma / 90) * Math.PI / 2;

      // Update the phone's rotation
      const phone = document.getElementById('phone');
      phone.style.transform = `rotateX(${-normalizedGamma}rad) rotateY(${beta}deg)`;
    };

    window.addEventListener('deviceorientation', handleOrientation);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return (
    <div id="phone">
      <div className="screen" />
    </div>
  );
};

export default GyroscopePhone;
