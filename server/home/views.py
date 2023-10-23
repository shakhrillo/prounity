''' Django settings '''
from django.shortcuts import render, redirect
from django.conf import settings
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from home.models import Product


def sign_in(request):
    ''' Sign In '''
    context = {}
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        if username == "":
            context["error"] = "Username is empty !"
            return render(request, "login.html", context)
        if password == "":
            context["error"] = "Password is empty !"
            return render(request, "login.html", context)
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect("home")
        context["error"] = "Username or password was entered incorrectly !"
        return render(request, "login.html", context)
    return render(request, "login.html", context)


def sign_up(request):
    ''' Sign Up '''
    context = {}
    if request.method == "POST":
        username = request.POST.get("username")
        first_name = request.POST.get("first_name")
        last_name = request.POST.get("last_name")
        password = request.POST.get("password")
        if username is not None:
            context["error"] = "Fill in the information !"
            return render(request, "register.html", context)
        if first_name is not None or last_name is not None:
            context["error"] = "Fill in the information !"
            return render(request, "register.html", context)
        if password is not None:
            context["error"] = "Fill in the information !"
            return render(request, "register.html", context)
        user_name = User.objects.filter(username=username)
        if len(user_name) != 0:
            context["error"] = "Such a user exists !"
            return render(request, "register.html", context)
        my_user = User.objects.create(
            username=username, first_name=first_name, last_name=last_name
        )
        my_user.set_password(password)
        my_user.save()
        return redirect("sigin_in")
    return render(request, "register.html", context)


@login_required
def logout_user(request):
    ''' Logout user '''
    logout(request)
    return redirect("sigin_in")


@login_required
def home(request):
    ''' Home '''
    context = {}
    context["objects_list"] = Product.objects.all().order_by("-pk")
    return render(request, "index.html", context)


@login_required
def create_product(request):
    ''' Create product '''
    context = {}
    if request.method == "POST":
        product_name = request.POST.get("product_name")
        product_price = request.POST.get("product_price")
        if product_name == "" or product_price == "":
            context["error"] = "Enter the information"
            return render(request, "create_proudct.html", context)
        product = Product(
            product_name=product_name,
            product_price=float(product_price),
            author=request.user,
        )
        product.save()
        return redirect("home")
    return render(request, "create_proudct.html", context)


@login_required
def delete_product(request, pr_id):
    ''' Delete product '''
    product = Product.objects.get(id=pr_id)
    product.delete()
    return redirect("home")


@login_required
def update_product(request, pr_id):
    ''' Update product '''
    context = {}
    context["product"] = Product.objects.filter(id=pr_id)[0]
    if request.method == "POST":
        product_name = request.POST.get("product_name")
        product_price = request.POST.get("product_price")
        if product_name == "" or product_price == "":
            context["error"] = "Enter the information"
            return render(request, "update_product.html", context)
        context["product"].product_name = product_name
        context["product"].product_price = product_price
        context["product"].save()
        return redirect("home")
    return render(request, "update_product.html", context)


@login_required
def user_profiles(request):
    ''' User profiles '''
    context = {}
    context['user_profiles'] = User.objects.filter(id=request.user.id)
    return render(request, 'settings.html', context)


@login_required
def user_update(request):
    ''' User update '''
    context = {}
    context['user_profiles'] = User.objects.filter(id=request.user.id)[0]
    if request.method == 'POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        if first_name == '' or last_name == '':
            context["error"] = "Enter the information"
            return render(request, "update_user.html", context)
        context['user_profiles'].first_name = first_name
        context['user_profiles'].last_name = last_name
        context['user_profiles'].save()
        return redirect('user_profiles')
    return render(request, 'update_user.html', context)


@login_required
def username_update(request):
    ''' User username update '''
    context = {}
    context['user_profiles'] = User.objects.filter(id=request.user.id)[0]
    if request.method == 'POST':
        username = request.POST.get('username')
        if username == '':
            context["error"] = "Enter the information"
            return render(request, 'username.html', context)
        user_name = User.objects.filter(username=username)
        if username != len(user_name):
            context["error"] = "Such a user exists !"
            return render(request, "username.html", context)
        context['user_profiles'].username = username
        context['user_profiles'].save()
        return redirect('user_profiles')
    return render(request, 'username.html', context)


@login_required
def password_update(request):
    ''' User password update '''
    context = {}
    context['user_profiles'] = User.objects.filter(id=request.user.id)[0]
    if request.method == 'POST':
        password = request.POST.get('password')
        if password == '':
            context["error"] = "Enter the information"
            return render(request, 'password.html', context)
        context['user_profiles'].set_password(password)
        context['user_profiles'].save()
        return redirect('user_profiles')
    return render(request, 'password.html', context)


def recaptcha_view(request):
    ''' Google recaptcha views '''
    context = {}
    context['key'] = settings.RE_CAPTCHA_SITE_KEY
    return render(request, 'recaptcha.html', context)
