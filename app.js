// Get the gyroscope data
window.addEventListener('deviceorientation', function(event) {
  var alpha = event.alpha;
  var beta = event.beta;
  var gamma = event.gamma;

  document.getElementById("gyroX").innerHTML = Math.round(alpha);
  document.getElementById("gyroY").innerHTML = Math.round(beta);
  document.getElementById("gyroZ").innerHTML = Math.round(gamma);
});

// Get the accelerometer data
window.addEventListener('devicemotion', function(event) {
  var accelerationX = event.acceleration.x;
  var accelerationY = event.acceleration.y;
  var accelerationZ = event.acceleration.z;

  document.getElementById("accX").innerHTML = Math.round(accelerationX);
  document.getElementById("accY").innerHTML = Math.round(accelerationY);
  document.getElementById("accZ").innerHTML = Math.round(accelerationZ);
});
