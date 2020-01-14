define({
    "run": function($page, routeInfo) {

        $page.on('click', 'a[data-wq-action=preselect]', function(evt) {

          var $button = $(evt.target);
          kindergarten = $button.parent().parent()[0].firstChild.innerText.trim();
          localStorage.setItem("kindergarten", kindergarten); // it may be better to use wq's store.js app instead

        })

        $page.ready( function() {

          var kindergartenIDs = new Map( [[ "Przedszkole Miejskie nr 1 Zaczarowany Ogród", 1 ],
          [ "Przedszkole Miejskie nr 2", 2 ],
          [ "Przedszkole Miejskie nr 3", 3 ],
          [ "Przedszkole Miejskie nr 4 Królestwo Skrzatów", 4 ],
          [ "Przedszkole Miejskie nr 5", 5 ],
          [ "Przedszkole Miejskie nr 6", 6 ],
          [ "Przedszkole Miejskie nr 7", 7 ],
          [ "Przedszkole Miejskie Integracyjne nr 8", 8 ],
          [ "Przedszkole Miejskie nr 9 Akademia Uśmiechu", 9 ],
          [ "Przedszkole Miejskie nr 10 Świat Fantazji", 10 ],
          [ "Przedszkole Miejskie nr 11 Calineczka", 11 ],
          [ "Przedszkole Miejskie nr 12 Niezapominajka", 12 ],
          [ "Przedszkole Miejskie nr 15", 13 ],
          [ "Przedszkole Miejskie nr 19 Słupskiego Chłopczyka", 14 ],
          [ "Przedszkole Miejskie nr 23 Promyczek", 15 ],
          [ "Przedszkole Miejskie nr 24 Słupski Niedźwiadek Szczęścia", 16 ],
          [ "Przedszkole Miejskie nr 31 Bajkowa Kraina", 17 ],
          [ "Przedszkole Miejskie Integracyjne nr 32 Tęczowa Kraina", 18 ]] );

          if (localStorage.getItem("kindergarten") !== null) {
            var kindergarten = localStorage.getItem("kindergarten").trim();
            $('#kindergartendish-kindergarten_id').val(kindergartenIDs.get(kindergarten)).change();
            $('#dishrating-kindergarten_id').val(kindergartenIDs.get(kindergarten)).change();
            // alternative using direct js DOM manipulation--------------------
            // var $element = document.getElementById("kindergartendish-kindergarten_id-button");
            // $element.firstChild.innerText = kindergarten;
            // ----------------------------------------------------------------
          }

        })

      }
});
