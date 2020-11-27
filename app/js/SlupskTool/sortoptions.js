define({
    "run": function($page, routeInfo) {
        $page.on('click', 'button[data-wq-action=addattachment]', function(evt) {

          var $button = $(evt.target);
          var $select_menus = $("select[id^=kindergartendish-compositions]");
          var $select;
          var $options;
          var optionsArray, m, n;

          for (m = 0; m < $select_menus.length; m++) {

            $select = $($select_menus[m]);
            $options = $select.find('option');

            optionsArray = [];
            for (n = 0; n < $options.length; n++) {
              if ($options[n].value != "")
              optionsArray.push({text: $options[n].text, value: $options[n].value});
            }
            $select.find('option').remove().end();

            // Order options considering special characters like Ś
            optionsArray.sort(function(obj1, obj2) { return obj1.text.localeCompare(obj2.text);  });
            //optionsArray.sort(function(obj1, obj2) { return obj1.text > obj2.text ? 1 : obj1.t < obj2.text ? -1 : 0; });

            $select.append('<option value="">Wybierz...</option>');
            for (n = 0; n < optionsArray.length; n++ ) {
              $select.append('<option value="' + optionsArray[n].value + '">' + optionsArray[n].text + '</option>');
            }

          }


        })
      }
});
