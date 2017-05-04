$(document).ready(function(){

  $('#burger').click(function() {
      $('.dropdown').slideDown();
  });

  $('.fa-window-close').click(function() {
      $('.dropdown').slideUp();
  });

  $(function() {
      //----- OPEN
      $('[data-popup-open]').on('click', function(e)  {
          var targeted_popup_class = jQuery(this).attr('data-popup-open');
          $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

          e.preventDefault();
      });

      //----- CLOSE
      $('[data-popup-close]').on('click', function(e)  {
          var targeted_popup_class = jQuery(this).attr('data-popup-close');
          $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

          e.preventDefault();
      });
  });

  $(function() {
      //----- OPEN
      $('[data-popup-open2]').on('click', function(e)  {
          var targeted_popup_class = jQuery(this).attr('data-popup-open2');
          $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

        });
        //----- CLOSE
        $('[data-popup-close]').on('click', function(e)  {
            var targeted_popup_class = jQuery(this).attr('data-popup-close');
            $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

            e.preventDefault();
        });
    });
});
