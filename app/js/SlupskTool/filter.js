define(['wq/store'], function (ds) { 'use strict';

var filter = {
    name: 'filter'
};

var $;

filter.init = function (config) {
    $ = config && config.jQuery || window.jQuery;
};

filter.run = function ($page, routeInfo) {

  /* In dishrating form: filter list of kindergarten dishes by kindergarten */
  // Does this event trigger correctly? (console.log() is not executed each time the selection changes...)
  $page.on('change', 'select[id=dishrating-kindergarten_id]', function(evt) {
      var kindergartenID = $(evt.target).val().trim();
      var date = $('#dishrating-date').val().trim();

      _filter(kindergartenID, date);

  });

  /* In dishrating form: filter list of kindergarten dishes by date */
  $page.on('change', 'input[id=dishrating-date]', function(evt) {
      var date = $(evt.target).val().trim();
      var kindergartenID = $('#dishrating-kindergarten_id').val().trim();

      _filter(kindergartenID, date);

  });

  /* In index map: get name of kindergarten from which popup was clicked */
  $page.on('click', 'a[data-wq-action=preselect][class=kindergarten]', function(evt) {

    /* Get selected kindergarten name */
    var $button = $(evt.target);
    var kindergarten_label = $button.parent().parent()[0].firstChild.innerText.trim();

    /* Save name of kindergarten using wq's store.js */
    ds.set('selected_kindergarten', kindergarten_label);

  });

  /* In dishes list: filter list of kindergarten dishes by kindergarten */
  $page.ready( function() {

    /* This does also trigger the detail and edit views (e.g. 'kindergartendishs/1' )... */
    if (window.location.href.indexOf('kindergartendishs/') != -1) {
        /* Set text in search widget using the stored kindergarten name */
        ds.get('selected_kindergarten').then(function(selected_kindergarten) {
          $('input[data-type="search"]').val(selected_kindergarten).change();
        });
    }

    /* Reset kindergarten name when leaving the url (so that the complete list is demanded in the guide) */
    if (window.location.href.indexOf('kindergartendishs/') == -1) {
      ds.set('selected_kindergarten', "");
    }

  });

  /* In index map: get name of producer from which popup was clicked */
  $page.on('click', 'a[data-wq-action=preselect][class=producer]', function(evt) {

    /* Get selected producer name */
    var $button = $(evt.target);
    var producer_label = $button.parent().parent()[0].firstChild.innerText.trim();

    /* Save name of producer using wq's store.js */
    ds.set('selected_producer', producer_label);

  });

  /* In producerinfo list: filter list of producerinfos by producer */
  $page.ready( function() {

    /* This does also trigger the detail and edit views (e.g. 'producerinfos/1' )... */
    if (window.location.href.indexOf('producerinfos/') != -1) {
        /* Set text in search widget using the stored producer name */
        ds.get('selected_producer').then(function(selected_producer) {
          $('input[data-type="search"]').val(selected_producer);
          $('input[data-type="search"]').change();
        });
    }

    /* Reset producer name when leaving the url (so that the complete list is demanded in the guide) */
    if (window.location.href.indexOf('producerinfos/') == -1) {
      ds.set('selected_producer', "");
    }

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
