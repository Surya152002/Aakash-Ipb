import React, { useState, useEffect } from 'react';

const EEGData = () => {
  const [accelerometerData, setAccelerometerData] = useState([]);
  const [gyroscopeData, setGyroscopeData] = useState([]);

  useEffect(() => {
    // Replace this with your actual data fetching logic
    const fetchData = async () => {
      const accData = await fetch('path/to/accelerometer/data');
      const gyroData = await fetch('path/to/gyroscope/data');

      setAccelerometerData(await accData.json());
      setGyroscopeData(await gyroData.json());
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Accelerometer Data</h2>
      {accelerometerData.map((dataPoint, index) => (
        <p key={index}>
          X: {dataPoint.x}, Y: {dataPoint.y}, Z: {dataPoint.z}
        </p>
      ))}

      <h2>Gyroscope Data</h2>
      {gyroscopeData.map((dataPoint, index) => (
        <p key={index}>
          X: {dataPoint.x}, Y: {dataPoint.y}, Z: {dataPoint.z}
        </p>
      ))}
    </div>
  );
};

export default EEGData;
