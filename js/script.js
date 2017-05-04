$(document).ready(function(){

  $('#burger').click(function() {
      $('.modal').slideDown();
  });

  $('.fa-window-close').click(function() {
      $('.modal').slideUp();
  });

});
