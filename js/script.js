$(document).ready(function(){

  $('#burger').click(function() {
      $('.modal').show();
  });

  $('.fa-window-close').click(function() {
      $('.modal').hide();
  });

});
