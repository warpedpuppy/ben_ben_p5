export default function help () {
  var hidden = false;
  return {
    hide: function () {
      if (hidden == false) {
        $('#help').fadeOut();
        hidden = true;
      } else {
        $('#help').fadeIn();
        hidden = false;
      }
    }
  }
}
