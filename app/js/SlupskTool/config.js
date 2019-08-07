define(["data/config", "data/templates", "data/version", "module"],
function(config, templates, version, module) {

var overrides = module.config();

config.router = {
    'base_url': ''
};

config.template = {
    'templates': templates,
    'defaults': {
        'version': version
    }
};

config.store = {
    'service': config.router.base_url,
    'defaults': {'format': 'json'}
};

config.map = {
    'bounds': [[54.45, 17.0], [54.48, 17.05]]
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
