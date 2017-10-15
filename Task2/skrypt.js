
window.addEventListener('scroll', function (e) {
	console.log(document.body.scrollTop);
  
  var $parallax = document.getElementById('parallax');
  var posY = document.body.scrollTop * 0.3-150;
  $parallax.style.backgroundPosition = '0px '+posY+'px';
})