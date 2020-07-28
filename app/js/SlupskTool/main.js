define(['wq/app', './removeattachment', './filter', './preselect', './hide', './welcome', './picture', 'wq/map', 'wq/patterns', 'wq/locate', 'wq/photos',
        './config', 'leaflet.draw', 'leaflet.markercluster'],
function(app, removeattachment, filter, preselect, hide, welcome, picture, map, patterns, locate, photos, config) {

app.use(removeattachment);
app.use(filter);
app.use(preselect);
app.use(hide);
app.use(welcome);
app.use(picture);
app.use(map);
app.use(patterns);
app.use(locate);
app.use(photos);

//  Add new map icon
map.createIcon("producer", {'iconUrl': config.router.base_url.concat("/images/producer.png"), 'iconSize': [30, 30]});
map.createIcon("kindergarten", {'iconUrl': config.router.base_url.concat("/images/kindergarten.png"), 'iconSize': [40, 40]});
map.createIcon("shop", {'iconUrl': config.router.base_url.concat("/images/shop.png"), 'iconSize': [30, 30]});

config.presync = presync;
config.postsync = postsync;
var ready = app.init(config).then(function() {
    app.jqmInit();
    app.prefetchAll();
});

// Sync UI
function presync() {
    $('button.sync').html("Syncing...");
    $('li a.ui-icon-minus, li a.ui-icon-alert')
       .removeClass('ui-icon-minus')
       .removeClass('ui-icon-alert')
       .addClass('ui-icon-refresh');
}

function postsync(items) {
    $('button.sync').html("Sync Now");
    app.syncRefresh(items);
}

return ready;

});
