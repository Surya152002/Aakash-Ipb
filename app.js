const accelerometerX = document.getElementById("accelerometer-x");
const accelerometerY = document.getElementById("accelerometer-y");
const accelerometerZ = document.getElementById("accelerometer-z");
const gyroscopeX = document.getElementById("gyroscope-x");
const gyroscopeY = document.getElementById("gyroscope-y");
const gyroscopeZ = document.getElementById("gyroscope-z");

const accelerometerXVisualizer = document.getElementById("accelerometer-x-visualizer");
const accelerometerYVisualizer = document.getElementById("accelerometer-y-visualizer");
const accelerometerZVisualizer = document.getElementById("accelerometer-z-visualizer");
const gyroscopeXVisualizer = document.getElementById("gyroscope-x-visualizer");
const gyroscopeYVisualizer = document.getElementById("gyroscope-y-visualizer");
const gyroscopeZVisualizer = document.getElementById("gyroscope-z-visualizer");

function updateData() {
  if (window.DeviceMotionEvent && window.DeviceOrientationEvent) {
    window.addEventListener("devicemotion", (event) => {
      accelerometerX.textContent = Math.round(event.accelerationIncludingGravity.x * 100) / 100;
      accelerometerY.textContent = Math.round(event.accelerationIncludingGravity.y * 100) / 100;
      accelerometerZ.textContent = Math.round(event.accelerationIncludingGravity.z * 100) / 100;
      accelerometerXVisualizer.style.height = `${(event.accelerationIncludingGravity.x * 10) + 50}px`;
      accelerometerYVisualizer.style.height = `${(event.accelerationIncludingGravity.y * 10) + 50}px`;
      accelerometerZVisualizer.style.height = `${(event.accelerationIncludingGravity.z * 10) + 50}px`;
    });

    window.addEventListener("deviceorientation", (event) => {
      gyroscopeX.textContent = Math.round(event.alpha * 100) / 100;
      gyroscopeY.textContent = Math.round(event.beta * 100) / 100;
      gyroscopeZ.textContent = Math.round(event.gamma * 100) / 100;
      gyroscopeXVisualizer.style.transform = `rotateX(${event.alpha}deg)`;
      gyroscopeYVisualizer.style.transform = `rotateY(${event.beta}deg)`;
      gyroscopeZVisualizer.style.transform = `rotateZ(${event.gamma}deg)`;
    });
  } else {
    console.log("DeviceMotionEvent or DeviceOrientationEvent not supported");
  }
}

updateData();
