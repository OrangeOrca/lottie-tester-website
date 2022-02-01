
/* Shapes */
console.log(bodymovin)

var svgContainer = document.getElementById('svgContainer');
var animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  path: 'src/animations/addmore.json'
});

