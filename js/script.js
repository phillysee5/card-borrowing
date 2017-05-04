$(document).ready(function(){

  $('#burger').click(function() {
      $('.dropdown').slideDown();
  });

  $('.fa-window-close').click(function() {
      $('.dropdown').slideUp();
  });

});
