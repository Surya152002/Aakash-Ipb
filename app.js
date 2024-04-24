const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('open', (event) => {
  console.log('WebSocket connection opened:', event);
});

socket.addEventListener('message', (event) => {
  const data = JSON.parse(event.data);
  document.getElementById('gyroscope-x-value').textContent = data.gyroscope.x;
  document.getElementById('gyroscope-y-value').textContent = data.gyroscope.y;
  document.getElementById('gyroscope-z-value').textContent = data.gyroscope.z;
  document.getElementById('accelerometer-x-value').textContent = data.accelerometer.x;
  document.getElementById('accelerometer-y-value').textContent = data.accelerometer.y;
  document.getElementById('accelerometer-z-value').textContent = data.accelerometer.z;
});

socket.addEventListener('close', (event) => {
  console.log('WebSocket connection closed:', event);
