  $(function() {
      var nav = $('.mainNav');
      var win = $(window);
      $('#menu').on('click', function(e) {
        e.preventDefault();
        nav.slideToggle();
      });

      win.resize(function() {
        if (win.width() > 575 && nav.is(':hidden')) {
          nav.removeAttr('style');
        }
      });
    });
