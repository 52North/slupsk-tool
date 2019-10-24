define({
    "run": function($page, routeInfo) {

        $page.on('click', 'a[data-wq-action=instruction-forward]', function(evt) {

          console.log("Hello World!")

          // Hide widget
          var $button = $(evt.target);
          var $parent = $button.parent().parent().parent();
          // var $parent = $button.parents("div[class='instruction']"));
          $parent.css("visibility","hidden");

          // Show next widget
          var $element = document.getElementById("instruction".concat( parseInt($parent.prop('id').substring(11, 12),10) + 1 ));
          $element.style.visibility = "visible";


        })

        $page.on('click', 'a[data-wq-action=instruction-backward]', function(evt) {

          // Hide widget
          var $button = $(evt.target);
          var $parent = $button.parent().parent().parent();
          // var $parent = $button.parents("div[class='instruction']"));
          $parent.css("visibility","hidden");

          // Show previous widget
          var $element = document.getElementById("instruction".concat( parseInt($parent.prop('id').substring(11, 12),10) - 1 ));
          $element.style.visibility = "visible";


        })

      }
});
