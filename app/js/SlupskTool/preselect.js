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
    localStorage.setItem("kindergarten", kindergarten); // it may be better to use wq's store.js app instead

  });

  // Save producer from which link was clicked
  $page.on('click', 'a[data-wq-action=preselect][class=producer]', function(evt) {

    var $button = $(evt.target);
    var producer = $button.parent().parent()[0].firstChild.innerText.trim();
    localStorage.setItem("producer", producer);         // it may be better to use wq's store.js app instead

  });

  $page.ready( function() {

    // Preselect kindergarten
    if (localStorage.getItem("kindergarten") !== null) {

      var kindergarten = localStorage.getItem("kindergarten").trim();

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

    // Preselect producer
    if (localStorage.getItem("producer") !== null) {

      var producer = localStorage.getItem("producer").trim();

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



};


return preselect;

});
