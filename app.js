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

// Function to update data with real-time values
function updateData(event) {
  // Update accelerometer data
  accelerometerX.textContent = event.acceleration.x.toFixed(2);
  accelerometerY.textContent = event.acceleration.y.toFixed(2);
  accelerometerZ.textContent = event.acceleration.z.toFixed(2);

  // Update gyroscope data
  gyroscopeX.textContent = event.rotationRate.alpha.toFixed(2);
  gyroscopeY.textContent = event.rotationRate.beta.toFixed(2);
  gyroscopeZ.textContent = event.rotationRate.gamma.toFixed(2);

  // Update visualizer with data values
  accelerometerXRect.style.width = `${Math.abs(event.acceleration.x) * 10}%`;
  accelerometerYRect.style.height = `${Math.abs(event.acceleration.y) * 10}%`;
  accelerometerZRect.style.transform = `rotate(${event.acceleration.z * 2}deg)`;

  gyroscopeXRect.style.transform = `rotateX(${event.rotationRate.alpha}deg)`;
  gyroscopeYRect.style.transform = `rotateY(${event.rotationRate.beta}deg)`;
  gyroscopeZRect.style.transform = `rotateZ(${event.rotationRate.gamma}deg)`;
}

// Add event listener for device motion
window.addEventListener('devicemotion', updateData);
