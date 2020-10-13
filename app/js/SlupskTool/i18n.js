define(['wq/store', 'wq/router'], function (ds, router) { 'use strict';

// from https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript
function getCookieValue(a) {
    var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}

var dict = {
  'en': {
    'i18n_welcome_p1': 'Welcome!',
    'i18n_welcome_p2': 'Eat locally and healthily! Welcome to the food system in Słupsk!',
    'i18n_welcome_p3': 'We all love food. We make sure our children eat healthily. We are paying more and more attention to what we eat and what we buy. What we eat affects not only us, but also the environment and our immediate surroundings. With this application, we will try to provide you with information about food in Słupsk. Moreover, by answering some questions in this application you can help us to better understand the food nexus. Using the map you can:',
    'i18n_welcome_p4': 'check what children eat in kindergartens in Słupsk, rate the meals and see how other people rate them, find out where the products for the meals come from,',
    'i18n_welcome_p5': 'get to know local food shops and their products,',
    'i18n_welcome_p6': 'get to know local producers and their products,',
    'i18n_welcome_p7': 'share what you eat and where you buy food with others,',
    'i18n_welcome_p8': 'help in understanding the environmental impact of what you eat and what children eat in kindergartens.',
    'i18n_welcome_p9': 'For more detailed explanation on how to use the application, please check the different topics presented in the navigation at the top of the page.',
    'i18n_welcome_p10': 'The application was developed in cooperation with the Słupsk City and on the basis of the collected data on the food needs of the inhabitants of Słupsk. We are currently testing the first version of the application. Share with us your opinion about it by clicking on the feedback link at the bottom of this page!',
    'i18n_welcome_p11': 'If you got login data by the project team, you can also find a login link at the bottom of this page to use additional features of the application.',
    'i18n_welcome_p12': 'Explore!',
    'i18n_auth_message': 'Currently, this website is only open for authenticated users. Please insert your username and password to proceed.',
    'i18n_username': 'Username',
    'i18n_password': 'Password',
    'i18n_explore_tool': 'Explore the tool!',
  },
  'pl': {
    'i18n_welcome_p1': 'Witaj!',
    'i18n_welcome_p2': 'Jedz lokalnie i zdrowo! Poznaj narzędzie do zbierania danych i informowania o żywności!',
    'i18n_welcome_p3': 'Wszyscy kochamy jedzenie. Zwracamy coraz większą uwagę na to, co jemy, co i gdzie kupujemy. Żywność, którą wybieramy, wpływa nie tylko na nas, ale także na środowisko i nasze najbliższe otoczenie. Za pomocą tej aplikacji przekażemy Ci informacje na temat żywności w słupskich przedszkolach. Pokażemy jaki wpływ ma wybór produktów żywnościowych na środowisko. Korzystając z aplikacji możesz:',
    'i18n_welcome_p4': 'sprawdzić, co jedzą dzieci w słupskich przedszkolach, ocenić posiłki i porównać, jak oceniają je inni rodzice, dowiedzieć się, skąd pochodzą produkty, z których przygotowywane są posiłki w przedszkolach,',
    'i18n_welcome_p5': 'poznać lokalne sklepy spożywcze i ich produkty,',
    'i18n_welcome_p6': 'poznać lokalnych producentów w regionie Słupska i ich produkty,',
    'i18n_welcome_p7': 'podzielić się informacjami o tym, co jesz i gdzie kupujesz produkty,',
    'i18n_welcome_p8': 'dowiedzieć się jaki wpływ na środowisko mają posiłki w przedszkolach i na Twoim talerzu.',
    'i18n_welcome_p9': 'Aby uzyskać bardziej szczegółowe wyjaśnienia dotyczące korzystania z aplikacji, zapoznaj się z menu u góry strony.',
    'i18n_welcome_p10': 'Aplikacja powstała we współpracy z Miastem Słupsk oraz Miejskimi Przedszkolami nr 12 i 25 w ramach projektu "Tworząc interfejsy...". Obecnie testujemy pierwszą wersję aplikacji. Podziel się z nami swoją opinią na temat aplikacji, klikając w link na dole strony.',
    'i18n_welcome_p11': 'Jeśli otrzymałeś dane do logowania od zespołu projektowego, wejdź w link do logowania na dole strony, aby móc skorzystać z dodatkowych funkcjonalności.',
    'i18n_welcome_p12': 'Odkrywaj!',
    'i18n_auth_message': 'Obecnie ta witryna jest otwarta tylko dla uwierzytelnionych użytkowników. Wprowadź swoją nazwę użytkownika i hasło, aby kontynuować.',
    'i18n_username': 'Nazwa Użytkownika',
    'i18n_password': 'Hasło',
    'i18n_explore_tool': 'Poznaj narzędzie do zbierania danych i informowania o żywności!',
  }
};


var i18n = {
    name: 'i18n'
};

var $;

i18n.init = function (config) {
    $ = config && config.jQuery || window.jQuery;

    this.dict = dict;

    // Set language
    var lang = getCookieValue('django_language');  // cookie language preference

    if (!lang) {
      if (navigator.language == 'en' || navigator.language == 'pl') {
        this.language = navigator.language;       // browser language preference
      } else {
        this.language = 'pl';                     // fall-back language, should be equal to LANGUAGE_CODE in base.py for consistency
      }
    } else {
      this.language = lang;
    }

    // Set language in select menu
    $('select[class="language"]').val(this.language).change();

    // Use cookie also here?
    ds.set('wq-language', this.language);

};


i18n.context = function(context, routeInfo) {
    return this.dict[this.language];
};


i18n.run = function ($page, routeInfo) {

  var parent = this;

  $page.on('change', 'select[class="language"]', function(evt) {

    // Set language taken from widget
    parent.language = $(evt.target).val();

    // Set cookie to be used by django.middleware.locale.LocaleMiddleware
    document.cookie = "django_language=".concat(parent.language).concat(";SameSite=Lax") ;

    // Reload page once
    // Use cookie also here?
    ds.get('wq-language').then(function(language) {

      if( language != parent.language ) {
        ds.set('wq-language', parent.language);
        window.location.reload();
      }

    });

  });

  $page.ready( function() {
    $('select[class="language"]').val(parent.language).change();
  });


};

return i18n;

});
