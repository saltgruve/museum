var tekstArray = [
  'Åpningstider: <br> Tirsdag – søndag 11.00-16.00',
  'Billetter:<br> Voksen: 120 kr<br>  Student/honnør: 100 kr<br> Barn (0-15 år): Gratis',
  'Informasjon:<br>Besøksadresse: Lade allé 60, 7041<br> Trondheim 73 87 02 80 post@ringve.no<br>Postadresse: Postboks 6289 Torgarden, 7489 Trondheim',
];
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  console.log(slides);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
var closeIcons = document.getElementsByClassName('iconBilder');
for (i = 0; i < closeIcons.length; i++) {
    closeIcons[i].addEventListener("mouseover", tekster);
}

function tekster(event) {
  var i = event.target.alt;
  document.getElementById('teksterBoks').innerHTML = tekstArray[i];
}
