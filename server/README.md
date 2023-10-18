## Crud App
> A simple [Crud](https://github.com/shakhrillo/prounity/tree/main) application built with [Django Rest Framework](https://www.django-rest-framework.org/) and [MongoDB](https://www.mongodb.com/)

## Technologies Used
- [Django]()
- [Django Rest Framework](https://www.django-rest-framework.org/)
- [Django Rest Framework Simple JWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html)

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
## Structure

> Authentification

| Endpoint | HTTP Method | CRUD Method | Result |
| -------- | -------- | -------- | -------- |
| api/user_sigin_up_views | POST | CREATE | Sign up |
| api/user_sigin_in_views | POST | CREATE | Sign in |
| api/user_profiles_views | GET  | READ   | Profile |

> Api Crud for Product using Django Rest Framework

| Endpoint | HTTP Method | CRUD Method | Result |
| -------- | -------- | -------- | -------- |
| api/product_list | POST / GET | CREATE / READ | Create product and get all product |
| api/product_detail/id/ | GET / PUT / DELETE | READ / UPDATE / DELETE | Read, Update and Delete product |

_______
## Credits
CRUD App is built and maintained by ```ProUnity Team```.
_______
## License
CRUD App is open-source software licensed under the [MIT License](https://opensource.org/license/mit/).
