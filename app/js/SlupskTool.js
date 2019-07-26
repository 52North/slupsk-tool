requirejs.config({
    'baseUrl': '/js/lib',
    'paths': {
        'SlupskTool': '../SlupskTool',
        'data': '../data/'
    }
});

requirejs(['SlupskTool/main']);
