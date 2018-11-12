function goLeft() {
  var rack = document.images[4].src;

  document.images[4].src = document.images[3].src;
  document.images[3].src = document.images[2].src;
  document.images[2].src = document.images[1].src;
  document.images[1].src = document.images[0].src;
  document.images[0].src = rack;
}

function goRight() {
  var rack = document.images[0].src;

  document.images[0].src = document.images[1].src;
  document.images[1].src = document.images[2].src;
  document.images[2].src = document.images[3].src;
  document.images[3].src = document.images[4].src;
  document.images[4].src = rack;


}
