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
    'i18n_about_p1': 'About',
    'i18n_about_p2': 'The EU funded project "Creating Interfaces" has the goal to build capacity for integrated governance at the Food-Water-Energy-nexus in cities on the water. The city of Słupsk is participating as a case study site. On this website, citizens in and around Słupsk can help understanding the connection between food, water and energy by submitting data about the following three topics:',
    'i18n_about_p3': 'Dishes in kindergartens',
    'i18n_about_p4': 'Local producers',
    'i18n_about_p5': 'Private dishes',
    'i18n_about_p6': 'Moreover, citizens can find information about these complexes which might help in their daily decisions, e.g. where to buy healthy and local food. If you need assistance in using the website, please check the different topics (Kindergarten, producer, citizen) presented in the navigation at the top of the page. Of course, you can also contact the project team via <a href="mailto:fundacja@pzr.org.pl">fundacja@pzr.org.pl</a>',
    'i18n_about_p7': 'More complex visualizations and analyses can be found here (add link). There is also a story map (add link).',
    'i18n_kindergarten_p1': 'Kindergartens',
    'i18n_kindergarten_p2': 'What do children eat in the kindergartens in Słupsk?',
    'i18n_kindergarten_p3': 'What can you find out? What can you do?',
    'i18n_kindergarten_p4': 'Find the kindergarten your child goes to on the map on the homepage. Click on the icon to get information about',
    'i18n_kindergarten_p5': 'what he/she will eat this week ("Kindergarten dishes") and',
    'i18n_kindergarten_p6': 'what people think about the dishes ("Kindergarten dish ratings").',
    'i18n_kindergarten_p7': 'Moreover you can find links to',
    'i18n_kindergarten_p8': 'add a kindergarten dish ("Add kindergarten dish", only for kindergarten teachers and project members) and',
    'i18n_kindergarten_p9': 'rate dishes ("Rate kindergarten dish").',
    'i18n_producer': 'Producer',
    'i18n_producer_p2': 'Discover food close to you!',
    'i18n_producer_p3': 'What can you find out? What can you do?',
    'i18n_producer_p4': 'You want to buy locally, but don`t know where to buy food from local farmers? You will find them on the map on the homepage or you can open a list of local producers directly with the following button.',
    'i18n_producer_p5': 'You can also help build a map of local producers by adding them to the map yourself!',
    'i18n_producer_p6': 'If you produce food yourself and want to leave more detailed data about your products - contact us!',
    'i18n_citizen_p1': 'Citizens',
    'i18n_citizen_p2': 'Share your food!',
    'i18n_citizen_p3': 'What can you find out? What can you do?',
    'i18n_citizen_p4': 'You want to share what you`re cooking with others? By using the following button you can share your recipe idea and let others know where to buy the best products in the area.',
    'i18n_citizen_p5': 'Use the button to check recipes from others.',
    'i18n_home': 'Home',
    'i18n_submit': 'Submit',
    'i18n_add': 'Add',
    'i18n_edit': 'Edit',
    'i18n_add_producer': 'Add producer',
    'i18n_show_producers':' Show producers',
    'i18n_this_producer': 'This producer',
    'i18n_all_producers': 'All producers',
    'i18n_producer_list': 'List of producers',
    'i18n_producers': 'Producers',
    'i18n_add_shop': 'Add shop',
    'i18n_show_shops': 'Show shops',
    'i18n_this_shop': 'This shop',
    'i18n_all_shops': 'All shops',
    'i18n_shop_list': 'List of shops',
    'i18n_shops': 'Shops',
    'i18n_shop': 'shop',
    'i18n_add_kindergarten': 'Add kindergarten',
    'i18n_this_kindergarten': 'This kindergarten',
    'i18n_all_kindergartens': 'All kindergartens',
    'i18n_kindergartens': 'Kindergartens',
    'i18n_kindergarten_list': 'List of kindergartens',
    'i18n_add_kindergarten_dish': 'Add kindergarten dish',
    'i18n_show_kindergarten_dishes': 'Show kindergarten dishes',
    'i18n_kindergarten_dishes': 'Kindergarten dishes',
    'i18n_kindergarten_dish': 'kindergarten dish',
    'i18n_kindergarten_dish_list': 'List of kindergarten dishes',
    'i18n_rate_kindergarten_dish': 'Rate kindergarten dish',
    'i18n_add_kindergarten_dish_rating': 'Add dish rating',
    'i18n_show_dish_ratings': 'Show dish ratings',
    'i18n_kindergarten_dish_ratings': 'Kindergarten dish ratings',
    'i18n_dish_rating': 'dish rating',
    'i18n_dish_rating_list': 'List of dish ratings',
    'i18n_add_private_dish': 'Add private dish',
    'i18n_show_private_dishes': 'Show private dishes',
    'i18n_private_dish': 'private dish',
    'i18n_private_dish_list': 'List of private dishes',
    'i18n_add_product_info': 'Add product info',
    'i18n_show_product_infos': 'Show product infos',
    'i18n_this_product_info': 'This product info',
    'i18n_all_product_infos': 'All product infos',
    'i18n_product_infos': 'Product infos',
    'i18n_product_info': 'product info',
    'i18n_add_feedback': 'Add feedback',
    'i18n_show_feedbacks': 'Show feedbacks',
    'i18n_feedback_list': 'List of feedbacks',
    'i18n_login': 'Login',
    'i18n_logout': 'Logout',
    'i18n_back': 'Back',
    'i18n_privacy_statement': 'Privacy Statement',
    'i18n_legal_notice': 'Legal Notice',
    'i18n_terms_of_use': 'Terms of Use',
    'i18n_kindergarten': 'Kindergarten',
    'i18n_choose_date': 'Choose the particular date',
    'i18n_dish': 'Dish',
    'i18n_dish_name': 'Enter the name of the dish',
    'i18n_meal_type': 'Type of meal',
    'i18n_meal_type_choices': [{'name': "breakfast", 'label': "Breakfast"}, {'name': "lunch", 'label': "Lunch"}, {'name': "afternoon_tea", 'label': "Afternoon tea"}],
    'i18n_food_waste': 'What percentage of food becomes waste during food preparation?',
    'i18n_food_waste_choices': [{'name': "less5", 'label': "Les than 5 %"}, {'name': "5to10", 'label': "From 5 % to 10 %"}, {'name': "11to25", 'label': "From 11 % to 25 %"}, {'name': "more25", 'label': "More than 25%"}],
    'i18n_picture': 'Picture of the dish',
    'i18n_composition': 'Composition',
    'i18n_ingredient_note': 'Please give detailed information about some of the ingredients if they are included in the choices below.',
    'i18n_add_ingredient': 'Add ingredient',
    'i18n_ingredient': 'Ingredient',
    'i18n_choose_ingredient': 'Choose an ingredient from the list',
    'i18n_weight': 'Enter the weight of the ingredient (grams)',
    'i18n_calories': 'Calories per portion',
    'i18n_allergens': 'Allergens in the dish',
    'i18n_allergens_list': 'List of allergens',
    'i18n_allergen_hint_edit': 'Below you can find a list of allergens. Please enter the list numbers of allergens contained in the dish (e.g. 3, 4, 6, 11).',
    'i18n_allergen_hint_detail': 'Please check the list of allergens below to find out what allergens the numbers stand for.',
    'i18n_per_portion': 'Per portion.',
    'i18n_from_producer': 'Was the ingredient bought directly from the producer?',
    'i18n_from_producer_choices': [{'name': "yes", 'label': "Yes"}, {'name': "no", 'label': "No"}, {'name': "undecided", 'label': "Don‘t know"}],
    'i18n_delete_ingredient': 'Delete ingredient',
    'i18n_required_field': 'required field',
    'i18n_date': 'Date',
    'i18n_select_date': 'Please select the date of the dish that you wish to comment on.',
    'i18n_choose_dish': 'Choose a dish',
    'i18n_like_dish': 'Did your child like the dish?',
    'i18n_score_hint1': '(1 = "it was awful", 5 = "it was delicious")',
    'i18n_proper_dish': 'Do you think it is proper for a kid?',
    'i18n_score_hint2': '(1 = "it is not", 5 = "it is")',
    'i18n_healthy_dish': 'Do you think it is healthy?',
    'i18n_score_hint3': '(1 = "it is very bad for my health", 5 = "it is very healthy")',
    'i18n_dish_comment': 'Do you have any further comments?',
    'i18n_general': 'General',
    'i18n_name': 'Name',
    'i18n_short_description': 'Short description',
    'i18n_type': 'Type',
    'i18n_main_products': 'Main product(s)',
    'i18n_buy_from_kindergarten': 'Do kindergartens buy from here?',
    'i18n_buy_choices': [{'name': "yes", 'label': "Yes"}, {'name': "no", 'label': "No"}],
    'i18n_contact': 'Contact',
    'i18n_address': 'Address',
    'i18n_telephone': 'Telephone',
    'i18n_email': 'E-mail',
    'i18n_website': 'Website',
    'i18n_location': 'Location',
    'i18n_location_hint': 'You can choose between two options for setting the location. In the first option, the location is taken from the gps of your device (if available). As second option, you can click on the map below.',
    'i18n_location_mode': 'Location Mode',
    'i18n_location_mode_choices': [{'name': "gps", 'label': "Use GPS"}, {'name': "interactive", 'label': "Point on map"}],
    'i18n_latitude': 'Latitude',
    'i18n_longitude': 'Longitude',
    'i18n_gps_accuracy': 'GPS Accuracy',
    'i18n_map_hint': 'Use the map to check the location of producers and to estimate the distance to a shop (see question below).',
    'i18n_products': 'Products',
    'i18n_product': 'Product',
    'i18n_products_hint': 'Please give some information about your products if they are in the list below.',
    'i18n_add_product': 'Add product',
    'i18n_product_deliverd': 'Product delivered',
    'i18n_shop_supplied': 'Shop supplied',
    'i18n_quantity': 'Quantity (kg)',
    'i18n_frequency': 'Frequency',
    'i18n_frequency_hint': 'If you deliver this product regularly, please insert the delivery frequency, e.g. once per week.',
    'i18n_price': 'Price per item/kg (PLN)',
    'i18n_production_mode': 'Mode of production',
    'i18n_production_mode_choices': [{'name': "organic_cert", 'label': "Organic with certificate"}, {'name': "organic_no_cert", 'label': "Organic without certificate"}, {'name': "traditional", 'label': "Traditional"}, {'name': "industrial", 'label': "Industrial"}],
    'i18n_shop_distance': 'Distance to shop (km)',
    'i18n_linetool1': 'To calculate the distance you can',
    'i18n_linetool2': 'use the line tool in the map above.',
    'i18n_biodegradable': 'Was it biodegradable?',
    'i18n_biodegradable_choices': [{'name': "yes", 'label': "Yes"}, {'name': "no", 'label': "No"}, {'name': "undecided", 'label': "Don‘t know"}],
    'i18n_recycling_package': 'Was it in recycling packages?',
    'i18n_recycling_package_choices': [{'name': "yes", 'label': "Yes"}, {'name': "no", 'label': "No"}, {'name': "undecided", 'label': "Don‘t know"}],
    'i18n_delete_product': 'Delete product',
    'i18n_from_local_producer': 'Did you buy at least one ingredient from a local producer?',
    'i18n_from_local_producer_choices': [{'name': "yes", 'label': "Yes"}, {'name': "no", 'label': "No"}],
    'i18n_local_producer_hint': 'Please list one or more local producers from which you bought an ingredient.',
    'i18n_delete_producer': 'Delete producer',
    'i18n_other': 'Other',
    'i18n_feedback': 'Feedback',
    'i18n_information': 'Information',
    'i18n_useful_info_question': 'Which information provided by the application is most useful to you? Rank the answers from the most useful information (6) to the least useful information (1), inserting numbers from 1 to 6.',
    'i18n_useful_info1': 'Menu in Slupsk kindergartens',
    'i18n_useful_info2': 'Information on individual products used preparing of meals in kindergartens',
    'i18n_useful_info3': 'Information on local food producers/sellers',
    'i18n_useful_info4': 'Information on the place of origin of the products from which meals in kindergartens are prepared',
    'i18n_useful_info5': 'Evaluations of meals in kindergartens made by other users',
    'i18n_useful_info6': 'Information about meals prepared by other users',
    'i18n_features': 'Features',
    'i18n_useful_features_question': 'Which features of the application are most useful to you? Rank the answers below from the most useful functionality (8) to the least useful functionality (1), inserting the numbers from 1 to 8.',
    'i18n_useful_feature1': 'Access to menu information in kindergartens',
    'i18n_useful_feature2': 'Access to information on local food producers/sellers',
    'i18n_useful_feature3': 'Access to information on products used for preparing meals in kindergartens',
    'i18n_useful_feature4': 'Possibility to evaluate meals prepared in kindergartens',
    'i18n_useful_feature5': 'Possibility to add your own dish',
    'i18n_useful_feature6': 'Possibility to add a local food producer/seller',
    'i18n_useful_feature7': 'Possibility to see the evaluations of meals prepared in kindergartens by other users',
    'i18n_useful_feature8': 'Leave a comment (open question)',
    'i18n_tech_aspects_heading': 'Technical and functional aspects',
    'i18n_tech_aspects_question': 'How do you assess the application in terms of technical and functional aspects? Please make your assessment by referring to the following categories.',
    'i18n_usability_choices': [{'name': "strong_agree", 'label': "I strongly agree"}, {'name': "rather_agree", 'label': "I‘d rather agree"}, {'name': "undecided", 'label': "Neither disagree nor agree"}, {'name': "rather_disagree", 'label': "I‘d rather disagree"}, {'name': "strong_disagree", 'label': "I strongly disagree"}],
    'i18n_attractiveness_choices': [{'name': "strong_agree", 'label': "I strongly agree"}, {'name': "rather_agree", 'label': "I‘d rather agree"}, {'name': "undecided", 'label': "Neither disagree nor agree"}, {'name': "rather_disagree", 'label': "I‘d rather disagree"}, {'name': "strong_disagree", 'label': "I strongly disagree"}],
    'i18n_maps_choices': [{'name': "strong_agree", 'label': "I strongly agree"}, {'name': "rather_agree", 'label': "I‘d rather agree"}, {'name': "undecided", 'label': "Neither disagree nor agree"}, {'name': "rather_disagree", 'label': "I‘d rather disagree"}, {'name': "strong_disagree", 'label': "I strongly disagree"}],
    'i18n_clarity_choices': [{'name': "strong_agree", 'label': "I strongly agree"}, {'name': "rather_agree", 'label': "I‘d rather agree"}, {'name': "undecided", 'label': "Neither disagree nor agree"}, {'name': "rather_disagree", 'label': "I‘d rather disagree"}, {'name': "strong_disagree", 'label': "I strongly disagree"}],
    'i18n_tech_aspect1': 'The application is easy to use',
    'i18n_tech_aspect2': 'The application is visually (graphically) attractive',
    'i18n_tech_aspect3': 'Maps help to use the application',
    'i18n_tech_aspect4': 'Instruction on how to use the application is easy to understand',
    'i18n_data_usefulness_heading': 'Usefulness of data',
    'i18n_data_usefulness_question': 'Do you think that the data collected through the application can be useful for arranging the menu in kindergartens?',
    'i18n_data_usefulness_choices': [{'name': "definitely_yes", 'label': "Definitely yes"}, {'name': "rather_yes", 'label': "Rather yes"}, {'name': "no_opinion", 'label': "I have no opinion"}, {'name': "rather_not", 'label': "Rather not"}, {'name': "definitely_not", 'label': "Definitely not"}],
    'i18n_feedback_comment': 'Comment',
    'i18n_additional_functions': 'What other functions should the application have?',
    'i18n_select_one': 'Select one...',
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
    'i18n_welcome_p12': 'Wejdź!',
    'i18n_auth_message': 'Obecnie ta witryna jest otwarta tylko dla uwierzytelnionych użytkowników. Wprowadź swoją nazwę użytkownika i hasło, aby kontynuować.',
    'i18n_username': 'Nazwa Użytkownika',
    'i18n_password': 'Hasło',
    'i18n_explore_tool': 'Poznaj narzędzie do zbierania danych i informowania o żywności!',
    'i18n_about_p1': 'Informacje o narzędziu',
    'i18n_about_p2': 'Projekt "Tworząc interfejsy" ma na celu zbadanie i pokazanie relacji jakie występują pomiędzy żywnością, wodą i energią na poziomie miast. Punktem wyjścia dla naszych działań jest system żywienia w publicznych przedszkolach w Słupsku. Działania projektowe pozwolą na poznanie i dyskusję o jakości żywienia w słupskich placówkach edukacyjnych, znaczeniu kwestii związanych ze środowiskiem i lokalnością w produkcji i dostarczaniu żywności.',
    'i18n_about_p3': 'Dania w przedszkolach',
    'i18n_about_p4': 'Lokalni producenci',
    'i18n_about_p5': 'Dania mieszkańców',
    'i18n_about_p6': 'Za pomocą aplikacji możesz znaleźć informacje, które mogą  pomóc ci w podejmowaniu codziennych decyzji dotyczących żywienia, np. gdzie kupić zdrową i lokalną żywność. Jeśli potrzebujesz pomocy w korzystaniu z aplikacji, zapoznaj się z tematami głównymi (przedszkola, producenci, mieszkańcy) u góry strony. Możesz  skontaktować się z zespołem projektowym za pośrednictwem adresu e-mail: <a href="mailto:fundacja@pzr.org.pl">fundacja@pzr.org.pl</a>',
    'i18n_about_p7': 'Bardziej złożone wizualizacje i analizy dotyczące wpływu żywności na środowisko można znaleźć tutaj (dodaj link).',
    'i18n_kindergarten_p1': 'Przedszkola',
    'i18n_kindergarten_p2': 'Co jedzą dzieci w słupskich przedszkolach?',
    'i18n_kindergarten_p3': 'Czego możesz się dowiedzieć? Co możesz zrobić?',
    'i18n_kindergarten_p4': 'Znajdź na mapie przedszkole, do którego chodzi Twoje dziecko. Kliknij ikonę, aby uzyskać informacje',
    'i18n_kindergarten_p5': 'Co w tym tygodniu zje Twoje dziecko?? („Dania przedszkolne”) i',
    'i18n_kindergarten_p6': 'Jak rodzice oceniają posiłki? („Oceny potraw z przedszkola”).',
    'i18n_kindergarten_p7': 'Możesz przejść do',
    'i18n_kindergarten_p8': 'dodaj danie przedszkolne („Dodaj danie przedszkolne”, tylko dla nauczycieli przedszkolnych i członków projektu) i',
    'i18n_kindergarten_p9': 'Oceń danie przedszkolne („Oceń danie przedszkolne”).',
    'i18n_producer': 'Producent',
    'i18n_producer_p2': 'Odkryj jedzenie blisko Ciebie!',
    'i18n_producer_p3': 'Czego możesz się dowiedzieć? Co możesz zrobić?',
    'i18n_producer_p4': 'Chcesz kupować lokalnie, ale nie wiesz, gdzie kupić żywność od lokalnych rolników? Znajdziesz ich na mapie na stronie głównej lub otwierając listę lokalnych producentów bezpośrednio za pomocą poniższego przycisku.',
    'i18n_producer_p5': 'Możesz również pomóc w tworzeniu mapy lokalnych producentów, dodając ich do mapy samodzielnie!',
    'i18n_producer_p6': 'Jeśli sam produkujesz żywność i chcesz zostawić informacje na temat swoich produktów - skontaktuj się z nami!',
    'i18n_citizen_p1': 'Mieszkańcy',
    'i18n_citizen_p2': 'Podziel się jedzeniem!',
    'i18n_citizen_p3': 'Czego możesz się dowiedzieć? Co możesz zrobić?',
    'i18n_citizen_p4': 'Chcesz podzielić z innymi tym, co gotujesz? Korzystając z poniższego przycisku, możesz podzielić się swoim pomysłem na przepis i poinformować innych, gdzie kupić najlepsze produkty w okolicy.',
    'i18n_citizen_p5': 'Użyj przycisku, aby sprawdzić przepisy innych osób.',
    'i18n_home': 'Strona główna',
    'i18n_submit': 'Zatwierdź',
    'i18n_add': 'Dodaj',
    'i18n_edit': 'Edytować',
    'i18n_add_producer': 'Dodaj producenta',
    'i18n_show_producers': 'Pokaż producentów',
    'i18n_this_producer': 'Wybrany producent',
    'i18n_all_producers': 'Wszyscy producenci',
    'i18n_producer_list': 'Lista producentów',
    'i18n_producers': 'Producenci',
    'i18n_add_shop': 'Dodaj sklep',
    'i18n_show_shops': 'Pokaż sklepy',
    'i18n_this_shop': 'Wybrany sklep',
    'i18n_all_shops': 'Wszystkie sklepy',
    'i18n_shop_list': 'Lista sklepy',
    'i18n_shops': 'Sklepy',
    'i18n_shop': 'sklep',
    'i18n_add_kindergarten': 'Dodaj przedszkole',
    'i18n_this_kindergarten':	'Wybrane przedszkole',
    'i18n_all_kindergartens': 'Wszystkie przedszkola',
    'i18n_kindergartens': 'Przedszkola',
    'i18n_kindergarten_list': 'Lista przedszkoli',
    'i18n_add_kindergarten_dish': 'Dodaj danie przedszkolne',
    'i18n_show_kindergarten_dishes': 'Pokaż dania przedszkolne',
    'i18n_kindergarten_dishes': 'Dania w przedszkolach',
    'i18n_kindergarten_dish': 'danie przedszkolne',
    'i18n_kindergarten_dish_list': 'Lista dania w przedszkolach',
    'i18n_rate_kindergarten_dish': 'Oceń danie przedszkolne',
    'i18n_add_kindergarten_dish_rating': 'Oceń danie przedszkolne',
    'i18n_show_dish_ratings': 'Pokaż oceny potraw',
    'i18n_kindergarten_dish_ratings': 'Oceny potraw z przedszkola',
    'i18n_dish_rating': 'ocena potraw',
    'i18n_dish_rating_list': 'Lista ocen potraw',
    'i18n_add_private_dish': 'Dodaj swoje danie',
    'i18n_show_private_dishes': 'Pokaż dania innych osób',
    'i18n_private_dish': 'swoje danie',
    'i18n_private_dish_list': 'Lista danie prywatnych',
    'i18n_add_product_info': 'Dodaj informacje o produktach',
    'i18n_show_product_infos': 'Pokaż informacje na temat produktu',
    'i18n_this_product_info': 'Wybrany informacje o produktach',
    'i18n_all_product_infos': 'Wszyscy informacje o produktach',
    'i18n_product_infos': 'Informacje o produktach',
    'i18n_product_info': 'informacje o produktach',
    'i18n_add_feedback': 'Dodaj ankieta ewaluacyjna',
    'i18n_show_feedbacks': 'Pokaż ankiety ewaluacyjne',
    'i18n_feedback_list': 'Lista ankiet ewaluacyjnych',
    'i18n_login': 'Zaloguj się',
    'i18n_logout': 'Wyloguj się',
    'i18n_back': 'Plecy',
    'i18n_privacy_statement': 'Ochrona prywatności',
    'i18n_legal_notice': 'Nota prawna',
    'i18n_terms_of_use': 'Warunki korzystania',
    'i18n_kindergarten': 'Przedszkole',
    'i18n_choose_date': 'Wybierz konkretną datę',
    'i18n_dish': 'Danie',
    'i18n_dish_name': 'Wpisz nazwę dania',
    'i18n_meal_type': 'Rodzaj posiłku',
    'i18n_meal_type_choices': [{'name': "breakfast", 'label': "Śniadanie"}, {'name': "lunch", 'label': "Obiad"}, {'name': "afternoon_tea", 'label': "Podwieczorek"}],
    'i18n_food_waste': 'Jaki procent posiłku staje się odpadem w procesie przygotowania dania?',
    'i18n_food_waste_choices': [{'name': "less5", 'label': "mniej niż 5 %"}, {'name': "5to10", 'label': "5 % - 10 %"}, {'name': "11to25", 'label': "11 % - 25 %"}, {'name': "more25", 'label': "więcej niż 25 %"}],
    'i18n_picture': 'Zdjęcie dania',
    'i18n_composition': 'Składniki',
    'i18n_ingredient_note': 'Proszę podać szczegółowe informacje o składnikach, jeśli są one uwzględnione w poniższych opcjach.',
    'i18n_add_ingredient': 'Dodaj składnik',
    'i18n_ingredient': 'Składnik',
    'i18n_choose_ingredient': 'Wybierz składnik z listy',
    'i18n_weight': 'Wpisz wagę składnika (w gramach)',
    'i18n_calories': 'Liczba kalorii na danie',
    'i18n_allergens': 'Alergeny w posiłku',
    'i18n_allergens_list': 'Lista alergenów',
    'i18n_allergen_hint_edit': 'Poniżej znajduje się lista alergenów. Proszę podać listę numerów alergenów zawartych w daniu (np. 3, 4, 6, 11).',
    'i18n_allergen_hint_detail': 'Zapoznaj się z poniższą listą alergenów, aby dowiedzieć się, jakie alergeny oznaczają podane liczby.',
    'i18n_per_portion': 'Na porcję.',
    'i18n_from_producer': 'Czy składnik został kupiony bezpośrednio od producenta?',
    'i18n_from_producer_choices': [{'name': "yes", 'label': "Tak"}, {'name': "no", 'label': "Nie"}, {'name': "undecided", 'label': "Nie wiem"}],
    'i18n_delete_ingredient': 'Usuń składnik',
    'i18n_required_field': 'Pole wymagane',
    'i18n_date': 'Data',
    'i18n_select_date': 'Wybierz dzień, w którym podano danie, które chcesz skomentować',
    'i18n_choose_dish': 'Wybierz datę',
    'i18n_like_dish': 'Czy Twojemu dziecku smakowało to danie?',
    'i18n_score_hint1': '(1 = "było okropne", 5 = "było pyszne")',
    'i18n_proper_dish': 'Czy uważasz, że to danie jest odpowiednie dla dziecka?',
    'i18n_score_hint2': '(1 = "zdecydowanie nie", 5 = "zdecydowanie tak")',
    'i18n_healthy_dish': 'Czy uważasz, że to danie jest zdrowe?',
    'i18n_score_hint3': '(1 = "jest bardzo niezdrowe", 5 = "jest bardzo zdrowe")',
    'i18n_dish_comment': 'Jeśli masz dodatkowe uwagi, wpisz je tutaj. ',
    'i18n_general': 'Generał',
    'i18n_name': 'Nazwa',
    'i18n_short_description': 'Krótki opis',
    'i18n_type': 'Rodzaj',
    'i18n_main_products': 'Głowne produkty',
    'i18n_buy_from_kindergarten': 'Czy przedszkola kupują produkty od producenta?',
    'i18n_buy_choices': [{'name': "yes", 'label': "Tak"}, {'name': "no", 'label': "Nie"}],
    'i18n_contact': 'Kontakt',
    'i18n_address': 'Adres',
    'i18n_telephone': 'Telefon',
    'i18n_email': 'E-mail',
    'i18n_website': 'Strona internetowa',
    'i18n_location': 'Lokalizacja',
    'i18n_location_hint': 'Lokalizacja jest pobierana automatycznie z GPS urządzenia (jeśli lokalizacja jest udostępniona). Możesz też kliknąć na mapie poniżej i oznaczyć swoją lokalizację.',
    'i18n_location_mode': 'Tryb lokalizacji',
    'i18n_location_mode_choices':[{'name': "gps", 'label': "Użyj GPS"}, {'name': "interactive", 'label': "Wybierz punkt na mapie"}],
    'i18n_latitude': 'Szerokość',
    'i18n_longitude': 'Długość geograficzna',
    'i18n_gps_accuracy': 'Dokładność GPS',
    'i18n_map_hint': 'Skorzystaj z mapy, aby sprawdzić lokalizację producentów i oszacować odległość do sklepu (patrz pytanie poniżej).',
    'i18n_products': 'Produkty',
    'i18n_product': 'Produkt',
    'i18n_products_hint': 'Podaj kilka informacji o swoich produktach, jeśli znajdują się na poniższej liście.',
    'i18n_add_product': 'Dodaj produkt',
    'i18n_product_deliverd': 'Nazwa produktu',
    'i18n_shop_supplied': 'Nazwa sklepu, do którego dostarczany jest produkt',
    'i18n_quantity': 'Ilość (kg)',
    'i18n_frequency': 'Częstotliwość dostaw',
    'i18n_frequency_hint': 'Jeśli dostarczasz ten produkt regularnie, wprowadź częstotliwość dostaw, np. raz w tygodniu.',
    'i18n_price': 'Cena za porcję/ kg (PLN)',
    'i18n_production_mode': 'Sposób produkcji',
    'i18n_production_mode_choices': [{'name': "organic_cert", 'label': "Organiczna z certyfikatem"}, {'name': "organic_no_cert", 'label': "Organiczna bez certyfikatu"}, {'name': "traditional", 'label': "Tradycyjna"}, {'name': "industrial", 'label': "Przemysłowa"}],
    'i18n_shop_distance': 'Odległość do sklepu (km)',
    'i18n_linetool1': 'Aby obliczyć odległość,',
    'i18n_linetool2': 'połącz linia punkty na mapie.',
    'i18n_biodegradable': 'Czy był biodegradowalny?',
    'i18n_biodegradable_choices': [{'name': "yes", 'label': "Tak"}, {'name': "no", 'label': "Nie"}, {'name': "undecided", 'label': "Nie wiem"}],
    'i18n_recycling_package': 'Czy produkt był w opakowaniu nadającym się do recyklingu?',
    'i18n_recycling_package_choices': [{'name': "yes", 'label': "Tak"}, {'name': "no", 'label': "Nie"}, {'name': "undecided", 'label': "Nie wiem"}],
    'i18n_delete_product': 'Usuń produkt',
    'i18n_from_local_producer': 'Czy kupiłeś/kupiłaś przynajmniej jeden produkt od lokalnego producenta?',
    'i18n_from_local_producer_choices': [{'name': "yes", 'label': "Tak"}, {'name': "no", 'label': "Nie"}],
    'i18n_local_producer_hint': 'Wymień jednego lub więcej lokalnych producentów, od których kupiłeś produkty do swojego dania.',
    'i18n_delete_producer': 'Usuń producenta',
    'i18n_other': 'Inny',
    'i18n_feedback': 'Ankieta ewaluacyjna',
    'i18n_information': 'Informacje ',
    'i18n_useful_info_question': 'Które informacje zawarte w aplikacji są dla Ciebie najbardziej przydatne? Uporządkuj odpowiedzi od najbardziej przydatnych (6) do najmniej przydatnych (1), wstawiając liczby od 1 do 6.',
    'i18n_useful_info1': 'Jadłospis przedszkola ',
    'i18n_useful_info2': 'Informacje o produktach wykorzystanych do przygotowania posiłków w przedszkolach',
    'i18n_useful_info3': 'Informacje na temat lokalnych producentów/sprzedawców',
    'i18n_useful_info4': 'Informacje o miejscu pochodzenia produktów, z których przygotowywane są posiłki w przedszkolach',
    'i18n_useful_info5': 'Oceny posiłków w przedszkolach wykonane przez innych użytkowników',
    'i18n_useful_info6': 'Informacje o posiłkach dodane przez innych użytkowników',
    'i18n_features': 'Cechy',
    'i18n_useful_features_question': 'Które funkcje aplikacji są według Ciebie najbardziej przydatne? Uporządkuj poniższe odpowiedzi od najbardziej przydatnych funkcji (8) do najmniej przydatnych funkcji (1), wstawiając liczby od 1 do 8.',
    'i18n_useful_feature1': 'Dostęp do informacji na temat jadłospisu w przedszkolach',
    'i18n_useful_feature2': 'Dostęp do informacji na temat producentów/sprzedawców żywności',
    'i18n_useful_feature3': 'Dostęp do informacji o produktach używanych do przygotowywania posiłków w przedszkolach',
    'i18n_useful_feature4': 'Możliwość oceny posiłków przygotowanych w przedszkolach',
    'i18n_useful_feature5': 'Możliwość dodania własnego dania',
    'i18n_useful_feature6': 'Możliwość ddania lokalnego producenta/sprzedawcy żywności',
    'i18n_useful_feature7': 'Możliwość obejrzenia ocen posiłków przygotowanych w przedszkolach przez innych użytkowników',
    'i18n_useful_feature8': 'Zostaw komentarz',
    'i18n_tech_aspects_heading': 'Aspekty techniczne i funkcjonalne',
    'i18n_tech_aspects_question': 'Jak oceniasz aplikację pod względem technicznym i funkcjonalnym? Dokonaj oceny, odnosząc się do następujących kategorii.',
    'i18n_usability_choices': [{'name': "strong_agree", 'label': "Zdecydowanie się zgadzam"}, {'name': "rather_agree", 'label': "Raczej się zgadzam"}, {'name': "undecided", 'label': "Nie mam zdania"}, {'name': "rather_disagree", 'label': "Raczej się nie zgadzam"}, {'name': "strong_disagree", 'label': "Zdecydowanie się nie zgadzam"}],
    'i18n_attractiveness_choices': [{'name': "strong_agree", 'label': "Zdecydowanie się zgadzam"}, {'name': "rather_agree", 'label': "Raczej się zgadzam"}, {'name': "undecided", 'label': "Nie mam zdania"}, {'name': "rather_disagree", 'label': "Raczej się nie zgadzam"}, {'name': "strong_disagree", 'label': "Zdecydowanie się nie zgadzam"}],
    'i18n_maps_choices': [{'name': "strong_agree", 'label': "Zdecydowanie się zgadzam"}, {'name': "rather_agree", 'label': "Raczej się zgadzam"}, {'name': "undecided", 'label': "Nie mam zdania"}, {'name': "rather_disagree", 'label': "Raczej się nie zgadzam"}, {'name': "strong_disagree", 'label': "Zdecydowanie się nie zgadzam"}],
    'i18n_clarity_choices': [{'name': "strong_agree", 'label': "Zdecydowanie się zgadzam"}, {'name': "rather_agree", 'label': "Raczej się zgadzam"}, {'name': "undecided", 'label': "Nie mam zdania"}, {'name': "rather_disagree", 'label': "Raczej się nie zgadzam"}, {'name': "strong_disagree", 'label': "Zdecydowanie się nie zgadzam"}],
    'i18n_tech_aspect1': 'Aplikacja jest prosta w obsłudze',
    'i18n_tech_aspect2': 'Aplikacja jest atrakcyjna wizualnie (graficznie)',
    'i18n_tech_aspect3': 'Mapy pomagają w korzystaniu z aplikacji',
    'i18n_tech_aspect4': 'Instrukcja obsługi aplikacji jest łatwa do zrozumienia',
    'i18n_data_usefulness_heading': 'Użyteczność danych',
    'i18n_data_usefulness_question': 'Czy uważasz, że dane zebrane przy użyciu tej aplikacji mogą być przydatne przy tworzeniu jadłospisu w przedszkolu?',
    'i18n_data_usefulness_choices': [{'name': "definitely_yes", 'label': "Zdecydowanie tak"}, {'name': "rather_yes", 'label': "Raczej tak"}, {'name': "no_opinion", 'label': "Nie mam zdania"}, {'name': "rather_not", 'label': "Raczej nie"}, {'name': "definitely_not", 'label': "Zdecydowanie nie"}],
    'i18n_feedback_comment': 'Zostaw swój komentarz',
    'i18n_additional_functions': 'Jakie inne funkcje powinna mieć aplikacja?',
    'i18n_select_one': 'Wybierz...',
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
    } else if (lang != 'en' && lang != 'pl') {
      this.language = 'pl';
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
