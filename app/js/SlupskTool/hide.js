define({
  "run": function($page, routeInfo) {

    $page.ready( function() {

      $('.wq-yes-hide').hide();
      $('.wq-no-hide').hide();

      if ( $('input[id=dishrating-date]').val() === "" ) {
        $('.wq-date-hide').hide();
        $('.wq-rate-hide').hide();
      }

      /* Show all list items when editing dishrating submissions */
      if ( $('input[id=dishrating-date]').val() !== "" ) {
        $('.wq-date-hide').show();
        $('.wq-rate-hide').show();
      }

    })

    $page.on('change', 'input[class="wq-hide"]', function(evt) {
      var $button = $(evt.target);

      if ($button.val() == "yes") {
        $('.wq-no-hide').show();
        // $('.wq-no-hide').attr('required', '');
        // $('.wq-no-hide').attr('data-error', 'This field is required.');
      } else {
        $('.wq-no-hide').hide();
        // $('.wq-no-hide').removeAttr('required');
        // $('.wq-no-hide').removeAttr('data-error');
      }


    })

    $page.on('change', 'select[id=dishrating-kindergarten_id]', function(evt) {
      var $button = $(evt.target);

      if ($button.val() !== "") {
        $('.wq-date-hide').show();
      }

      if ($button.val() === "") {
        $('.wq-date-hide').hide();
      }

    })

    $page.on('change', 'input[id=dishrating-date]', function(evt) {
      var $button = $(evt.target);

      if ($button.val() !== "") {
        $('.wq-rate-hide').show();
      }

      if ($button.val() === "") {
        $('.wq-rate-hide').hide();
      }

    })

  }
});
