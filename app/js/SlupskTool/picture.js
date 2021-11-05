define(['wq/store', './config'], function (ds, conf) { 'use strict';

var picture = {
    name: 'picture'
};

var $;

picture.init = function (config) {
    $ = config && config.jQuery || window.jQuery;
};

picture.run = function ($page, routeInfo) {

  /* Get the image url of the selected dish and show the image */
  $page.on('click', 'select[id=dishrating-dish_id]', function(evt) {
    var $button = $(evt.target);
    var dish_id = $button.val();

    ds.get('/kindergartendishs').then(function(dishes) {
      for (let dish of dishes.list) {
        if (dish.id == dish_id) {
          if (dish.picture == null) {
            $('img[id=dishrating-preview]').attr("src", conf.router.base_url.concat("/images/empty.png"));
          } else {
            $('img[id=dishrating-preview]').attr("src", dish.picture);
          }
          break;
        }
        $('img[id=dishrating-preview]').attr("src", conf.router.base_url.concat("/images/empty.png"));
      }
    });

  })


};

return picture;

});
