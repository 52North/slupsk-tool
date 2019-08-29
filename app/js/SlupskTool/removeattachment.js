define({
    "run": function($page, routeInfo) {
        $page.on('click', 'button[data-wq-action=removeattachment]', function(evt) {
            var $button = $(evt.target),
                section = $button.data('wq-section'),
                $row = $button.parents('.section-' + section);
            $row.parent().remove();
        })
      }
});
