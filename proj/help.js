var hidden = false

function hide() {
  if (hidden == false) {
    $('#help').fadeOut();
    hidden = true
  } else {
    $('#help').fadeIn();
    hidden = false
  }
}
