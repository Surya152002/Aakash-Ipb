function updateGyroscopeData(event) {
  document.getElementById('gyroscope-x-value').textContent = event.gamma;
  document.getElementById('gyroscope-y-value').textContent = event.beta;
  document.getElementById('gyroscope-z-value').textContent = event.alpha;
}

function updateAccelerometerData(event) {
  document.getElementById('accelerometer-x-value').textContent = event.accelerationIncludingGravity.x;
  document.getElementById('accelerometer-y-value').textContent = event.accelerationIncludingGravity.y;
  document.getElementById('accelerometer-z-value').textContent = event.accelerationIncludingGravity.z;
}

window.addEventListener('deviceorientation', updateGyroscopeData);
window.addEventListener('devicemotion', updateAccelerometerData);
