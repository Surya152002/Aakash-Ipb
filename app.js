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
  accelerometerX.textContent = Math.round(event.acceleration.x * 100) / 100;
  accelerometerY.textContent = Math.round(event.acceleration.y * 100) / 100;
  accelerometerZ.textContent = Math.round(event.acceleration.z * 100) / 100;

  // Update gyroscope data
  gyroscopeX.textContent = Math.round(event.rotationRate.alpha * 100) / 100;
  gyroscopeY.textContent = Math.round(event.rotationRate.beta * 100) / 100;
  gyroscopeZ.textContent = Math.round(event.rotationRate.gamma * 100) / 100;

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
