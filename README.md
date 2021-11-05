 Creating Interfaces - Slupsk Tool
=========================================

This data collection tool is running with [wq framework]. See [Getting Started] for general information on how to build/run the application.

### How to locally test the tool

* Clone the git repository.
* Change to the develop branch, e.g. `git checkout develop`.
* Create the file `db/SlupskTool/settings/dev.py`.
  You can do this for example by running  
  `wq start SlupskTool . -d slupsk-tool.demo.52north.org --with-gis`  
  which creates a completely new project based on the [wq standard template]. Then you can copy the mentioned file.
* Add `.so` suffix to spatialite library in `db/SlupskTool/settings/dev.py`, i.e.  
  `SPATIALITE_LIBRARY_PATH = 'mod_spatialite.so'`
* Run migrations (create data base tables and prepopulate some of them -> Kindergarten/Shop) and create superuser via   
  `cd db/`   
  `./manage.py migrate`  
  `./manage.py createsuperuser`  
  `cd ..`
* Generate htdocs folder via  
  `./deploy.sh 0.0.1`  
  Attention: Do not update the templates as it would overwrite some changes! You do not need to build PhoneGap either.
* Run tool on localhost:8000 via  
  `./db/manage.py runserver`


[wq framework]: http://wq.io/
[Getting Started]: https://wq.io/docs/setup
[wq standard template]: https://github.com/wq/wq-django-template


Funding organizations/projects
-------

The development of slupsk-tool was supported by several organizations and projects. Among other we would like to thank the following organisations and project

| Project/Logo | Description |
| :-------------: | :------------- |
| <a target="_blank" href="https://creatinginterfaces.eifer.kit.edu/"><img alt="Creating Interfaces - capacity building for the urban food-water-energy (FWE) -nexus" align="middle" width="250" src="https://creatinginterfaces.eifer.kit.edu/wp-content/uploads/2018/06/logo_creating-interfaces_250x104.png"/></a><a target="_blank" href="https://ec.europa.eu/programmes/horizon2020/en/home"><img alt="This project has received funding from the European Union's Horizon 2020 research and innovation programme under grant agreement No 730254" align="middle" width="1000" src="https://creatinginterfaces.eifer.kit.edu/wp-content/uploads/2018/06/logo_eu-600x160.png"/></a> | The development of this version of slupsk-tool was supported by the <a target="_blank" href="https://ec.europa.eu/programmes/horizon2020/en/home">European Union's Horizon 2020 research and innovation programme</a> (grant agreement No 730254) within the research project <a target="_blank" href="https://creatinginterfaces.eifer.kit.edu/">Creating Interfaces</a>. |
