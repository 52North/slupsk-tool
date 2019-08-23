 Creating Interfaces - Slupsk Tool
=========================================

This data collection tool is running with [wq framework]. See [Getting Started] for general information on how to build/run the application.

### How to locally test the tool

* Clone the git repository.
* Create the file `db/SlupskTool/settings/dev.py`. 
  You can do this for example by running  
  `wq start SlupskTool . -d slupsk-tool.demo.52north.org --with-gis`  
  which creates a completely new project based on the [wq standard template]. Then you can copy the mentioned file.
* Add `.so` suffix to spatialite library in `db/SlupskTool/settings/dev.py`  
  `SPATIALITE_LIBRARY_PATH = 'mod_spatialite.so'`
* Run migrations (create data base tables and prepopulate some of them -> Institution/Producer) and create superuser via   
  `cd db/`   
  `./manage.py migrate`  
  `./manage.py createsuperuser`  
  `cd ..`
* Generate htdocs folder via  
  `./deploy 0.0.1`
* Run tool on localhost:8000 via  
  `./db/manage.py runserver`

### Links

[wq framework]: http://wq.io/
[wq.app]: https://wq.io/wq.app
[wq.db]: https://wq.io/wq.db
[wq.start]: https://wq.io/wq.start
[Getting Started]: https://wq.io/docs/setup
[wq standard template]: https://github.com/wq/wq-django-template
[RequireJS]: http://requirejs.org
[Django REST Framework]: http://www.django-rest-framework.org
[build process]: http://wq.io/docs/build
[PhoneGap]: http://phonegap.com
