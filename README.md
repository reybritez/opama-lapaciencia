# OPAMA La Paciencia | Python Django + Modern JavaScript 

### El motivo de la creación de este portal es para desarrollar apps utilizando los datos proveídos por el Viceministerio de Transporte.

#### Contiene 3 módulos: API, Contenido y Website. 
* API: Obtiene los datos cargados de datasets en formatos csv, excel o json, y genera una ruta de acceso a través de DJANGO REST Framework.
* Content o Contenido: Obtiene los datos cargados a través de archivos .md o MarkDown, utilizado en los ReadMe de Git o Notebooks. Es un CMS completo que sólo se enlaza creando las rutas en Django y su respectiva view.
* WebSite: Es donde se despliegan los datos enlazados. landing Pages y Apps, donde podrían acceder con facilidad los ciudadanos o developers con ganas de hallar información.

PD: No soy diseñador, por eso integré React por si alguien de buen <3 quiera colaborar. 


## Requerimientos
1. Python: este proyecto fue desarrollado en Python 3.10.10 | Download: https://www.python.org/ Utilizado para el Backend - Python & Django
2. Node.js: desarrollado en Node v16.18.1 | Download: https://nodejs.org/en | Utilizado para el Frontend - JavaScript & npm

### Stack de Tecnologías
#### Base de datos
* SQlite | db.sqlite3 (PostgreSQL)  https://sqlite.org
#### Backend
* Python | Django   https://www.djangoproject.com/re
* Python | Django Rest Framework    https://www.django-rest-framework.org/
#### Frontend
* JavaScript    https://www.w3schools.com/js
* JavaScript | React.js     https://react.dev/
* CSS | BootStrap   https://getbootstrap.com/docs/

<img class="img-fluid" src="/static/images/screenshots/landing_page.png" style="height: 500px; width: auto;">

<img class="img-fluid" src="/static/images/screenshots/landing_page2.png" style="height: 500px; width: auto;">

## CONFIGURACIÓN

### Configurar Python Environment & Instalación de paquetes

**Instalar Virtual Environments en Python** pip install virtualenv | https://pypi.org/project/virtualenv/

**Crear Virtual Environment (venv)** virtualenv venv

**Activar el Virtual Python Environment -->** /venv/Scripts/activate.ps1

**Instalar Requerimientos de Python, ejecutar** pip install -r requirements.txt

**Si queres agregar nuevos paquetes, ejecutar** pip install A_Python_Package | https://pypi.org

**Cuando instales paquetes Python adicionales, para actualizar el archivo requirements.txt, ejecuta** pip freeze > requirements.txt

**Crear un archivo .env en el directorio principal con la instancia SECRET_KEY='secreto'**

**ejecutar: py manage.py makemigrations**

**ejecutar: py manage.py migrate**


### Configurar Node.js y Buildear archivos Frontend 

**Inicializar Node.js, ejecutar:** npm init -y

**Instalar paquete npm webpack, ejecutar:** npm install webpack webpack-cli --save-dev

**Es una idea buena agregar el '--save' siempre que instales un paquete npm en tu proyecto django**

**Esto creará una carpeta node_modules/, además de los archivos package.json & package-lock.json**

**Instalar paquete npm para transpilar React.js a .js, ejecuta:** npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react

**Instalar paquete npm de React.js, ejecuta:** npm install --save react react-dom

**Para crear tus archivos frontend, ejecuta:** npm run dev   |   Deje esto funcionando en segundo plano para que node esté atento a cualquier cambio en la carpeta assets/ del  frontend.

**Abre otra instancia de la terminal de vscode o cli,ingresa al directorio principal y ejecuta:** py manage.py runserver

##### Ahora su proyecto está listo y usted debe estar listo para comenzar el desarrollo, y digerir la estructura del código. Visita http://127.0.0.1:8000/ para ver el ejemplo de proyecto: Aplicaciones, API, Páginas de contenido

## EXTRAS

"dev": "webpack --mode development --watch"  *This allows you to watch for changes made in the asset/ folder, when a build input file chnages, the frontend bundle files are re-built*

in the scripts /package.json

"scripts": {

    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack --mode development --watch"

}

##### Su Frontend está ahora configurado, modifique assets/JavaScripts/site.js con cualquier JavaScript que desee en el sitio


## Notas
* Utilizo la carpeta na/ en esta aplicación Django para contener los archivos que no se muestran en la aplicación Django, esto es para mantener el proyecto limpio, estas carpetas también deberían incluirse en el .gitignore para producción.


## Structure - For Translate

#### Configuration Folder
configuration/ folder is where your Django project is 'configured' aka: settings.py & urls.py ect...

#### Static Folder
**** Never Put Sensitive DATA in the Static Folder instead you must serve it using DRF and modify the settings to apply appropriate Restriction ****

./static/database/
Contains any Data which you want to serve statically. Its Important to note any files in the static folders are available to anyone with a web browser and a URL to download/view.
**This folder should contain files like; .xlsx | .csv | .json etc**

./static/images/
Contains any Images and Graphic which will be served up to the frontend using {% static 'images/image.png' %}

./static/scripts/
Contains the JavaScript files which have been built from your ./asset/javascript folder. Any changes to your .js should be made in the asset folder file, the frontend should then be rebuilt Run: <code>npm run dev</code>

./static/styles/
Contains the CSS files which have been built from your ./asset/styles folder. Any changes to your (.css | .scss) should be made in the asset folder file, the frontend should then be rebuilt Run: <code>npm run dev</code>

## Alpine.js
On the the website templates folder you can find two exmaples of Alpine.js which is a lightweight framework for creating js components on page.
One the apps is a simple counter which uses alpine/javascript to count up and down in incraments on click. It's only a way to prove my theory.

Made with love - Steven Rey Britez.-

## SCREENSHOTS

#### Documentación

<img class="img-fluid" src="/static/images/screenshots/documentacion.png" style="height: 500px; width: auto;">

<img class="img-fluid" src="/static/images/screenshots/documentacion2.png" style="height: 500px; width: auto;">

#### APPS DEMO - The Biggest Spender

<img class="img-fluid" src="/static/images/screenshots/apps_biggest_spender.png" style="height: 500px; width: auto;"

#### APPS DEMO - Tu Bus De La Suerte

<img class="img-fluid" src="/static/images/screenshots/apps_generador_tu_bus_de_la_suerte.png" style="height: 500px; width: auto;">

<img class="img-fluid" src="/static/images/screenshots/apps_table_tu_bus_de_la_suerte.png" style="height: 500px; width: auto;"

#### REST APIS

<img class="img-fluid" src="/static/images/screenshots/django_rest_api_biggest_spender.png" style="height: 500px; width: auto;">

<img class="img-fluid" src="/static/images/screenshots/django_rest_api_tubusdelasuerte.png" style="height: 500px; width: auto;"