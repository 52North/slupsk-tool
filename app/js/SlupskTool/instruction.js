define(['wq/store'], function (ds) { 'use strict';

var instruction = {
  name: 'instruction'
};

var $;

instruction.init = function (config) {
  $ = config && config.jQuery || window.jQuery;
  ds.set('instructionIndex', "1");
};

instruction.run = function ($page, routeInfo) {

  // Forward navigation button in instruction window
  $page.on('click', 'a[data-wq-action=instruction-forward]', function(evt) {

    // Hide widget
    var $button = $(evt.target);
    var $parent = $button.parent().parent();
    // var $parent = $button.parents("div[class='instruction']"));
    $parent.css("visibility","hidden");

    // Show next widget
    var $id = parseInt($parent.prop('id').substring(11, 12),10) + 1;
    var $element = document.getElementById( "instruction".concat($id) );
    $element.style.visibility = "visible";
    ds.set('instructionIndex', $id);

  });

  // Backward navigation button in instruction window
  $page.on('click', 'a[data-wq-action=instruction-backward]', function(evt) {

    // Hide widget
    var $button = $(evt.target);
    var $parent = $button.parent().parent();
    // var $parent = $button.parents("div[class='instruction']"));
    $parent.css("visibility","hidden");

    // Show previous widget
    var $id = parseInt($parent.prop('id').substring(11, 12),10) - 1;
    var $element = document.getElementById( "instruction".concat($id) );
    $element.style.visibility = "visible";

    ds.set('instructionIndex', $id);

  });

  // Make sure that links in collapsible can be used
  $page.on( "collapsibleexpand", ".instruction", function( evt ){

    var $button = $(evt.target);
    // collapsible
    $button.css('pointer-events','all')
    // collapsible heading
    $button[0].childNodes[0].setAttribute('style', 'pointer-events: all;');
    // collapsible content (not necessary, inherited from parent)
    // $button[0].childNodes[1].setAttribute('style', 'pointer-events: all;');

  });

  // Make sure that marker popups can be used
  $page.on( "collapsiblecollapse", ".instruction", function( evt ){

    var $button = $(evt.target);
    // collapsible
    $button.css('pointer-events','none')
    // collapsible heading
    $button[0].childNodes[0].setAttribute('style', 'pointer-events: all;');
    // collapsible content (not necessary, inherited from parent)
    // $button[0].childNodes[1].setAttribute('style', 'pointer-events: none;');

  });

  $page.ready( function() {

    ds.get('instructionIndex').then(function(instructionIndex) {

      var getUrl = window.location;
      var baseUrl = getUrl.protocol + "//" + getUrl.host + "/";

      if (document.URL === baseUrl) {
        for (let i = 1; i <= 4; i++) {
          if ( i == instructionIndex) {
            document.getElementById( "instruction".concat(i) ).style.visibility = "visible";
          } else {
            document.getElementById( "instruction".concat(i) ).style.visibility = "hidden";
          }
        }
      }

    });

  });

};

return instruction;

});
