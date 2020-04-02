define(["data/config", "data/templates", "data/version", "module", "wq/app"],
function(config, templates, version, module, app) {

var overrides = module.config();

config.router = {
    'base_url': '/slupsk-tool'
};

config.template = {
    'templates': templates,
    'defaults': {
        'version': version,
        'first_photo': function() {
            return this['photos[0][photo]'];
        },
        'can_add_producer_info': function() {
          if (typeof(app.user) === 'undefined') {
            return false;
          }
          if (app.user.is_superuser == true) {
            return true;
          }
          if (app.user.is_staff == true) {
            return true;
          }
          if (RegExp('producer*').test(app.user.username)) {
            return true;
          }
          return false;
        },
        'can_add_kindergarten_dish': function() {
          if (typeof(app.user) === 'undefined') {
            return false;
          }
          if (app.user.is_superuser == true) {
            return true;
          }
          if (app.user.is_staff == true) {
            return true;
          }
          return false;
        }
    }
};

config.store = {
    'service': config.router.base_url,
    'defaults': {'format': 'json'}
};

config.map = {
    'bounds': [[54.45, 17.0], [54.48, 17.05]],
    'basemaps': [{
        'name': 'OpenStreetMap Carto',
        'type': 'tile',
        'url': '//a.tile.openstreetmap.org/{z}/{x}/{y}.png',
        'layer': 'terrain',
        'attribution': '© <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors (<a href="https://www.openstreetmap.org/copyright">ODbL</a>) | <a href="https://icons8.com">icons8</a>'
    },
    {
        'name': 'OpenTopoMap',
        'type': 'tile',
        'url': '//a.tile.opentopomap.org/{z}/{x}/{y}.png',
        'layer': 'terrain',
        'attribution': 'Map data: © <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors (<a href="https://www.openstreetmap.org/copyright">ODbL</a>), SRTM | Map design: © <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>) | <a href="https://icons8.com">icons8</a>'
    }]
};

config.outbox = {};

config.transitions = {
    'default': "slide",
    'save': "flip"
};

for (var key in overrides) {
    config[key] = overrides[key];
}

return config;

});
