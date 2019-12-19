define(['wq/store'], function (ds) { 'use strict';

var filter = {
    name: 'filter'
};

var $;

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
[ "Przedszkole Miejskie nr 12 Niezapominajka ", 12 ],
[ "Przedszkole Miejskie nr 15", 13 ],
[ "Przedszkole Miejskie nr 19 Słupskiego Chłopczyka", 14 ],
[ "Przedszkole Miejskie nr 23 Promyczek", 15 ],
[ "Przedszkole Miejskie nr 24 Słupski Niedźwiadek Szczęścia", 16 ],
[ "Przedszkole Miejskie nr 31 Bajkowa Kraina", 17 ],
[ "Przedszkole Miejskie Integracyjne nr 32 Tęczowa Kraina", 18 ]] );


filter.init = function (config) {
    $ = config && config.jQuery || window.jQuery;
};

filter.run = function ($page, routeInfo) {

  $page.on('change', 'select[name=kindergarten_id]', function(evt) {
      var $button = $(evt.target);
      var $parent = $button.parent();
      var kindergarten = $parent.find("span")[0].innerText;  // TODO: trim white space
      var kindergartenID = kindergartenIDs.get(kindergarten);

      ds.get('/kindergartendishs').then(function(dishes) {

        var dishesFiltered = _filter(dishes, kindergartenID);

        var $dish_select = $('[id="dishrating-dish_id"]');
        $dish_select.find('option').remove().end();
        $dish_select.append('<option value="">Select one...</option>');

        var value = 1;

        for (let dish of dishesFiltered) {
           $dish_select.append('<option value="' + value + '">' + dish + '</option>');
           value++;
        }

      });

  });


};

function _filter(dishes, kindergartenID) {

  var dishesFiltered = [];

  for (let dish of dishes.list) {
    if (dish.kindergarten_id === kindergartenID) {
      dishesFiltered.push(dish.label);
    }
  }

  return dishesFiltered;

}


return filter;

});
