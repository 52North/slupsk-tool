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
              ds.set('kindergarten', "");
              break;
            }
          }
        });
      }

    });

    // Preselect producer
    ds.get('producer').then(function(producer) {

      if ( producer !== null ) {
        ds.get('/producers').then(function(producers) {
          for (let p of producers.list) {
            if (p.name.trim() === producer.trim()) {
              $('#producerinfo-producer_id').val(p.id).change();
              ds.set('producer', "");
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
