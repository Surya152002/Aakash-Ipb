var gn = new GyroNorm();

gn.init({
  frequency: 50,
  gravityNormalized: true,
  orientationBase: GyroNorm.GAME,
  decimalCount: 0, // Set decimalCount to 0 to get whole numbers
  logger: null,
  screenAdjusted: false
}).then(function() {
  gn.start(function(data) {
    var gyroX = Math.round(data.do.gamma);
    var gyroY = Math.round(data.do.beta);
    var gyroZ = Math.round(data.do.alpha);
    var accX = Math.round(data.do.ax);
    var accY = Math.round(data.do.ay);
    var accZ = Math.round(data.do.az);

    document.getElementById("gyroX").innerHTML = gyroX;
    document.getElementById("gyroY").innerHTML = gyroY;
    document.getElementById("gyroZ").innerHTML = gyroZ;
    document.getElementById("accX").innerHTML = accX;
    document.getElementById("accY").innerHTML = accY;
    document.getElementById("accZ").innerHTML = accZ;
  });
});
