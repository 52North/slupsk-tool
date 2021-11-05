define({
    "run": function($page, routeInfo) {

        // Sort kindergarten dish list and dish rating list by date with most recent being at the top
        $page.ready( function() {

          /* Function takes two <li>-elements, extracts the date string from the <span>-sub-element
             and sorts the <li>-elements by string comparison (the date format, yyyy-mm-dd, makes sure
             that sorting by date is working correctly) */
          function sort_by_date(a, b) {
            return ($(a).find("span").text()) < ($(b).find("span").text()) ? 1 : -1;
          }

          /* Use id instead of class because using a common class results in appending
             the two separate lists */
          $('#wq-kindergartendish-list li').sort(sort_by_date).appendTo('#wq-kindergartendish-list');
          $('#wq-dishrating-list li').sort(sort_by_date).appendTo('#wq-dishrating-list');

        })

        // Sort ingredient list alphabetically
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
