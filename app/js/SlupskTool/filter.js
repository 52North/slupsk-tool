define(['wq/store'], function (ds) { 'use strict';

var filter = {
    name: 'filter'
};

var $;

filter.init = function (config) {
    $ = config && config.jQuery || window.jQuery;
};

filter.run = function ($page, routeInfo) {

  // Does this event trigger correctly? (console.log() is not executed each time the selection changes...)
  $page.on('change', 'select[id=dishrating-kindergarten_id]', function(evt) {
      var kindergartenID = $(evt.target).val().trim();
      var date = $('#dishrating-date').val().trim();

      _filter(kindergartenID, date);

  });

  $page.on('change', 'input[id=dishrating-date]', function(evt) {
      var date = $(evt.target).val().trim();
      var kindergartenID = $('#dishrating-kindergarten_id').val().trim();

      _filter(kindergartenID, date);

  });

  /* Add the option "Other" to shop selection menus (used in private dish and productinfo).
     This function does not fit thematically to filtering, but it is too small to make a separate app */
  $page.ready( function() {

    $('select[class=shop-select]').append('<option value="">Other</option>');

  });


};

function _filter(kindergartenID, date) {

  // 1) Use wq's store.js app to get the full list of dishes
  // 2) Filter the list of dishes
  // 3) Remove all options of the select menu and append only those from the filtered list

  ds.get('/kindergartendishs').then(function(dishes) {

    var dishesFiltered = [];
    var dishIds = [];

    for (let dish of dishes.list) {
      if (dish.kindergarten_id.toString() === kindergartenID && date === "") {
        dishesFiltered.push(dish.label);
        dishIds.push(dish.id);
        continue;
      }
      if (kindergartenID === "" && dish.date === date) {
        dishesFiltered.push(dish.label);
        dishIds.push(dish.id);
        continue;
      }
      if (dish.kindergarten_id.toString() === kindergartenID && dish.date === date) {
        dishesFiltered.push(dish.label);
        dishIds.push(dish.id);
        continue;
      }
      if (kindergartenID === "" && date === "") {
        dishesFiltered.push(dish.label);
        dishIds.push(dish.id);
        continue;
      }
    }

    var $dish_select = $('[id="dishrating-dish_id"]');
    $dish_select.find('option').remove().end();
    $dish_select.append('<option value="">Select one...</option>');

    // Note that value is the private key of the dish
    for (var i = 0; i < dishesFiltered.length; i++ ) {
      $dish_select.append('<option value="' + dishIds[i] + '">' + dishesFiltered[i] + '</option>');
    }

  });

}

return filter;

});
