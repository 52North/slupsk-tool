define(['wq/store'], function (ds) { 'use strict';

var welcome = {
    name: 'welcome'
};

var $;

welcome.init = function (config) {
    $ = config && config.jQuery || window.jQuery;
    ds.set('show_welcome', true);
};

welcome.run = function ($page, routeInfo) {

  /* Show welcome dialog if it is the first page load */
  $page.ready( function() {

    ds.get('show_welcome').then(function(show_welcome) {
      if(show_welcome == true) {
        $('div[id="welcome"]').addClass("active");
      }
    });

  });

  /* Show welcome dialog */
  $page.on('click', '.welcome-open', function(evt) {
    $('div[id="welcome"]').addClass("active");
  })

  /* Hide welcome dialog */
  $page.on('click', '.welcome-close', function(evt) {
    $('div[id="welcome"]').removeClass("active");
    ds.set('show_welcome', false);
  })

};

return welcome;

});
