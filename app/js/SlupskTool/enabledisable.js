define({
    "run": function($page, routeInfo) {

        $page.on('change', 'input:radio[name="type"]', function(evt) {
            var $button = $(evt.target);

            if($button.prop('id') == 'dish-type-private') {
              $('[name="institution_id"]').selectmenu( "disable" );
            } else if ($button.prop('id') == 'dish-type-institutional') {
              $('[name="institution_id"]').selectmenu( "enable" );
            }

        })

        $page.ready( function() {

          $('[name="institution_id"]').selectmenu( "enable" );
          $('label[for="dish-type-institutional"]').addClass('ui-radio-on').addClass('ui-btn-active');

        })

      }
});
