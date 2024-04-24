const accelerometer = new DeviceMotionEvent('deviceorientation');
const gyroscope = new DeviceOrientationEvent('deviceorientation');

const accelerometerX = document.getElementById('accelerometer-x');
const accelerometerY = document.getElementById('accelerometer-y');
const accelerometerZ = document.getElementById('accelerometer-z');

const gyroscopeX = document.getElementById('gyroscope-x');
const gyroscopeY = document.getElementById('gyroscope-y');
const gyroscopeZ = document.getElementById('gyroscope-z');

function updateData() {
  if (accelerometer.accelerationIncludingGravity) {
    accelerometerX.textContent = Math.floor(accelerometer.accelerationIncludingGravity.x);
    accelerometerY.textContent = Math.floor(accelerometer.accelerationIncludingGravity.y);
    accelerometerZ.textContent = Math.floor(accelerometer.accelerationIncludingGravity.z);
  }

  if (gyroscope.gamma) {
    gyroscopeX.textContent = Math.floor(gyroscope.gamma);
    gyroscopeY.textContent = Math.floor(gyroscope.beta);
    gyroscopeZ.textContent = Math.floor(gyroscope.alpha);
  }
}

window.addEventListener('deviceorientation', (event) => {
  accelerometer = event;
  updateData();
});

window.addEventListener('deviceorientationabsolute', (event) => {
  gyroscope = event;
  updateData();
});

setInterval(updateData, 100);
