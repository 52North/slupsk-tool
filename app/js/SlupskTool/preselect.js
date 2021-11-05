define(['wq/store'], function (ds) { 'use strict';

var preselect = {
    name: 'preselect'
};

var $;

preselect.init = function (config) {
    $ = config && config.jQuery || window.jQuery;
};

preselect.run = function ($page, routeInfo) {

  // Save kindergarten from which link was clicked
  $page.on('click', 'a[data-wq-action=preselect][class=kindergarten]', function(evt) {

    var $button = $(evt.target);
    var kindergarten = $button.parent().parent()[0].firstChild.innerText.trim();
    ds.set('kindergarten', kindergarten);

  });

  // Save producer from which link was clicked
  $page.on('click', 'a[data-wq-action=preselect][class=producer]', function(evt) {

    var $button = $(evt.target);
    var producer = $button.parent().parent()[0].firstChild.innerText.trim();
    ds.set('producer', producer);

  });

  // Save always the kindergarten that was selected latest (from "Add dishrating" form)
  $page.on('change', 'select[id=dishrating-kindergarten_id]', function(evt) {

    var $button = $(evt.target);
    var kindergarten = $button.parent()[0].firstChild.innerText.trim();
    ds.set('kindergarten', kindergarten);

  });

  // Save always the kindergarten that was selected latest (from "Add kindergarten dish" form)
  $page.on('change', 'select[id=kindergartendish-kindergarten_id]', function(evt) {

    var $button = $(evt.target);
    var kindergarten = $button.parent()[0].firstChild.innerText.trim();
    ds.set('kindergarten', kindergarten);

  });

  // Save always the date that was selected latest (from "Add dishrating" form)
  $page.on('change', 'input[id=dishrating-date]', function(evt) {

    var $button = $(evt.target);
    var date = $button.val();
    ds.set('date', date);

  });

  // Save always the date that was selected latest (from "Add kindergarten dish" form)
  $page.on('change', 'input[id=kindergartendish-date]', function(evt) {

    var $button = $(evt.target);
    var date = $button.val();
    ds.set('date', date);

  });

  $page.ready( function() {

    // Preselect kindergarten
    ds.get('kindergarten').then(function(kindergarten) {

      if ( kindergarten !== null) {
        ds.get('/kindergartens').then(function(kindergartens) {
          for (let k of kindergartens.list) {
            if (k.name.trim() === kindergarten.trim()) {
              $('#kindergartendish-kindergarten_id').val(k.id).change();
              $('#dishrating-kindergarten_id').val(k.id).change();
              // alternative using direct js DOM manipulation--------------------
              // var $element = document.getElementById("kindergartendish-kindergarten_id-button");
              // $element.firstChild.innerText = kindergarten;
              // ----------------------------------------------------------------
              break;
            }
          }
        });
      }

    });

    // Preselect date
    ds.get('date').then(function(date) {

      if ( date !== null) {
        $('#dishrating-date').val(date).change();
        $('#kindergartendish-date').val(date).change();
      }

    });

    // Preselect producer
    ds.get('producer').then(function(producer) {

      if ( producer !== null ) {
        ds.get('/producers').then(function(producers) {
          for (let p of producers.list) {
            if (p.name.trim() === producer.trim()) {
              $('#producerinfo-producer_id').val(p.id).change();
              break;
            }
          }
        });
      }

    });

  });

};


return preselect;

});
