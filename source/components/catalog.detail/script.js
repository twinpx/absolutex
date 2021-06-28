(function ($) {
  'use strict';

  $(function () {
    //not auth block
    $('.b-catalog-detail__not-auth .btn:eq(0)').click(function (e) {
      e.preventDefault();
      $('.b-catalog-detail__auth-reg').addClass('state2');
    });

    //sign in block
    var $form = $('.b-catalog-detail__reg form');
    var ajaxUrl = $form.attr('action');
    var ajaxMethod = $form.attr('method');

    document
      .querySelector('.b-catalog-detail__reg__button .btn')
      .addEventListener('click', function () {
        //fetch data
        $.ajax({
          url: ajaxUrl,
          type: ajaxMethod, //GET
          dataType: 'html',
          data: $form.serialize(),
          success: function (html) {
            $('#catalogDetailNotAuth').hide();
            $('#catalogDetailWrap').html(html);
          },
          error: function (a, b, c) {
            if (window.console) {
              console.log(a);
              console.log(b);
              console.log(c);
            }
          },
        });
      });
  });
})(jQuery);
