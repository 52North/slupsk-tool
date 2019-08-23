 Creating Interfaces - Slupsk Tool
=========================================

This data collection tool is running with [wq framework]. See [Getting Started] for general information on how to build/run the application.


### How to locally test the tool

* Clone the git repository
* Add `.so` suffix to spatialite library in `db/SlupskTool/settings/dev.py`  
  `SPATIALITE_LIBRARY_PATH = 'mod_spatialite.so'`
* Run migrations (create data base tables and prepopulate some of them -> Institution/Producer) and create superuser   
  `cd db/`   
  `./manage.py migrate`  
  `./manage.py createsuperuser`  
  `cd ..`
* Generate htdocs folder  
  `./deploy 0.0.1`
* Run tool on localhost:8000  
  `./db/manage.py runserver`

### Links

[wq framework]: http://wq.io/
[wq.app]: https://wq.io/wq.app
[wq.db]: https://wq.io/wq.db
[wq.start]: https://wq.io/wq.start
[Getting Started]: https://wq.io/docs/setup
[RequireJS]: http://requirejs.org
[Django REST Framework]: http://www.django-rest-framework.org
[build process]: http://wq.io/docs/build
[PhoneGap]: http://phonegap.com
