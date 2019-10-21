define(['wq/app', './removeattachment', './enabledisable', 'wq/map', 'wq/patterns', 'wq/photos', 'wq/locate',
        './config',
        'leaflet.draw', 'leaflet.markercluster'],
function(app, removeattachment, enabledisable, map, patterns, locate, photos, config) {

app.use(removeattachment);
app.use(enabledisable);
app.use(map);
app.use(patterns);
app.use(locate);
app.use(photos);

map.createIcon("green", {'iconUrl': "/images/green.png"});

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
