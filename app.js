const accelerometerX = document.getElementById('accelerometer-x');
const accelerometerY = document.getElementById('accelerometer-y');
const accelerometerZ = document.getElementById('accelerometer-z');

const gyroscopeX = document.getElementById('gyroscope-x');
const gyroscopeY = document.getElementById('gyroscope-y');
const gyroscopeZ = document.getElementById('gyroscope-z');

const accelerometerXRect = document.querySelector('.accelerometer .x.rect');
const accelerometerYRect = document.querySelector('.accelerometer .y.rect');
const accelerometerZRect = document.querySelector('.accelerometer .z.rect');

const gyroscopeXRect = document.querySelector('.gyroscope .x.rect');
const gyroscopeYRect = document.querySelector('.gyroscope .y.rect');
const gyroscopeZRect = document.querySelector('.gyroscope .z.rect');

function handleMotionEvent(event) {
  // Extract accelerometer data
  accelerometerX.textContent = Math.floor(event.acceleration.x);
  accelerometerY.textContent = Math.floor(event.acceleration.y);
  accelerometerZ.textContent = Math.floor(event.acceleration.z);

  // Extract gyroscope data
  gyroscopeX.textContent = Math.floor(event.rotationRate.alpha);
  gyroscopeY.textContent = Math.floor(event.rotationRate.beta);
  gyroscopeZ.textContent = Math.floor(event.rotationRate.gamma);

  // Update the visualizer with the data values
  accelerometerXRect.style.width = `${Math.abs(accelerometerX.textContent)}%`;
  accelerometerYRect.style.height = `${Math.abs(accelerometerY.textContent)}%`;
  accelerometerZRect.style.transform = `rotate(${accelerometerZ.textContent}deg)`;

  gyroscopeXRect.style.transform = `rotateX(${gyroscopeX.textContent}deg)`;
  gyroscopeYRect.style.transform = `rotateY(${gyroscopeY.textContent}deg)`;
  gyroscopeZRect.style.transform = `rotateZ(${gyroscopeZ.textContent}deg)`;
}

function handleError(error) {
  console.error('Error accessing motion sensors:', error);
}

// Check if DeviceMotion and DeviceOrientation APIs are available
if (window.DeviceMotionEvent && window.DeviceOrientationEvent) {
  // Add event listeners to listen for motion events
  window.addEventListener('devicemotion', handleMotionEvent, false);
  window.addEventListener('deviceorientation', handleMotionEvent, false);
} else {
  console.error('DeviceMotion and/or DeviceOrientation APIs not supported');
}
