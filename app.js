function updateGyroscopeData(event) {
  document.getElementById('gyroscope-x-value').textContent = Math.round(event.gamma * 100) / 100;
  document.getElementById('gyroscope-y-value').textContent = Math.round(event.beta * 100) / 100;
  document.getElementById('gyroscope-z-value').textContent = Math.round(event.alpha * 100) / 100;
}

function updateAccelerometerData(event) {
  document.getElementById('accelerometer-x-value').textContent = Math.round(event.accelerationIncludingGravity.x * 100) / 100;
  document.getElementById('accelerometer-y-value').textContent = Math.round(event.accelerationIncludingGravity.y * 100) / 100;
  document.getElementById('accelerometer-z-value').textContent = Math.round(event.accelerationIncludingGravity.z * 100) / 100;
}

window.addEventListener('deviceorientation', updateGyroscopeData);
window.addEventListener('devicemotion', updateAccelerometerData);
