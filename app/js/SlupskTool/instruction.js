define({
    "run": function($page, routeInfo) {

        $page.on('click', 'a[data-wq-action=instruction-forward]', function(evt) {

          // Hide widget
          var $button = $(evt.target);
          var $parent = $button.parent().parent().parent();
          // var $parent = $button.parents("div[class='instruction']"));
          $parent.css("visibility","hidden");

          // Show next widget
          var $id = parseInt($parent.prop('id').substring(11, 12),10) + 1;
          var $element = document.getElementById( "instruction".concat($id) );
          $element.style.visibility = "visible";
          localStorage.setItem("instructionIndex", $id);

        })

        $page.on('click', 'a[data-wq-action=instruction-backward]', function(evt) {

          // Hide widget
          var $button = $(evt.target);
          var $parent = $button.parent().parent().parent();
          // var $parent = $button.parents("div[class='instruction']"));
          $parent.css("visibility","hidden");

          // Show previous widget
          var $id = parseInt($parent.prop('id').substring(11, 12),10) - 1;
          var $element = document.getElementById( "instruction".concat($id) );
          $element.style.visibility = "visible";
          localStorage.setItem("instructionIndex", $id);

        })

        $page.ready( function() {

          var instructionIndex = localStorage.getItem("instructionIndex");

          var getUrl = window.location;
          var baseUrl = getUrl.protocol + "//" + getUrl.host + "/";

          if (document.URL === baseUrl) {
            for (i = 1; i <= 3; i++) {
              if ( i == instructionIndex) {
                document.getElementById( "instruction".concat(i) ).style.visibility = "visible";
              } else {
                document.getElementById( "instruction".concat(i) ).style.visibility = "hidden";
              }
            }
          }

        })


      }
});
