window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
  const alpha = event.alpha || 0;
  const beta = event.beta || 0;
  const gamma = event.gamma || 0;

  // Normalize gamma value between -90 and 90 degrees
  const normalizedGamma = (gamma / 90) * Math.PI / 2;

  // Update the phone's rotation
  const phone = document.getElementById('phone');
  phone.style.transform = `rotateX(${-normalizedGamma}rad) rotateY(${beta}deg)`;

  // Print gyroscope values
  console.log(`alpha: ${alpha}, beta: ${beta}, gamma: ${gamma}`);
}
