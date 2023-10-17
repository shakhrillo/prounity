## Crud App
> A simple [Crud](https://github.com/shakhrillo/prounity/tree/main) application built with [Django Rest Framework](https://www.django-rest-framework.org/) and [MongoDB](https://www.mongodb.com/)

## Technologies Used
- [Django Rest Framework](https://www.django-rest-framework.org/)
- [Django Rest Framework Simple JWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html)
- [MongoDB](https://www.mongodb.com/)
## Development
> To get a local copy of the code, ```clone``` it using git:
 ```sh
git clone https://github.com/shakhrillo/prounity
cd server
```
> Installing packages using [pip](https://pypi.org/project/pip/) and [Virtual environments](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/)

_To create a ```virtual environment```, go to your project’s ```directory``` and ```run venv```_

```Linux:```
 ```sh
python3 -m venv env
source env/bin/activate
```
```Windows:```
```sh
py -m venv env
.\env\Scripts\activate
```
_______
> Install dependencies:

_And tell pip to install all of the packages in this file using the -r flag_

```Linux:```
 ```sh
python3 -m pip install -r requirements.txt
python3 -m pip freeze > requirements.txt
```
```Windows:```
```sh
py -m pip install -r requirements.txt
py -m pip freeze > requirements.txt
```
_______
## Integration MongoDB

_Django is a SQL to mongodb query transpiler. Using django we can use ```MongoDB``` as a backend database for our Django project. We don’t even need to change the ```Django ORM```. The best part is that we can setup Django with MongoDB by adding just one line of code. There is no need to change serializers, views, or any other modules._

> Install packages

```sh
pip install djongo
```
> Make changes to settings.py file

_Now, open ```settings.py``` file. Comment out or remove previous SQL Database configuration and add the following code in ```settings.py``` file : ```settings.py_```
```
DATABASES = {
      'default': {
          'ENGINE': 'djongo',
          'NAME': 'your-database-name',
      }
  }
```
_______
## Finnaly you can start our project
> Now, you can start a ```local web server``` by running:

 ```sh
python manage.py runserver
```
_______
## Available Scripts
| Scripts | Description                                                        |
| ------ |--------------------------------------------------------------------|
| python manage.py migrate | migrate is run through the following command for a Django project. |
| python manage.py createsuperuser | create a super user                                                |
| python manage.py runserver | to run a emulated server on your local computer                    |

_______
## Credits
CRUD App is built and maintained by ```ProUnity Team```.
_______
## License
CRUD App is open-source software licensed under the [MIT License](https://opensource.org/license/mit/).


