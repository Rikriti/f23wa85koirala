var express = require("express");
var router = express.Router();



/* GET users listing. */
router.get("/", function (req, res, next) {
  const min = 1;
  const max = 100;
  const radians = Math.floor(Math.random() * (max - min + 1)) + min;
  const radius = Math.floor(Math.random() * (max - min + 1)) + min;

  const x = Math.floor(Math.random() * (max - min + 1)) + min;

  const opposite = Math.floor(Math.random() * (max - min + 1)) + min;
  const hypotenuse = Math.floor(Math.random() * (max - min + 1)) + min;

  const response = `getCircleX()applied to (${radians},${radius}) is ${getCircleX(radians, radius)}`+`<br>`
    + `Math.asinh() applied to ${x} is ${Math.asinh(x)} `+`<br>`
    + `calcAngle() applied to (${opposite},${hypotenuse}) is  ${calcAngle(opposite, hypotenuse)}\n`;

  res.send(response);
});


function getCircleX(radians, radius) {
  return Math.cos(radians) * radius;
}

function calcAngle(opposite, hypotenuse) {
  return Math.asin(opposite / hypotenuse);
}



module.exports = router;
