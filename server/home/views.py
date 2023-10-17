from django.shortcuts import render,redirect
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.models import User
from django.contrib.auth .decorators import login_required
from home.models import *

def sigin_in(request):
    context = {}
    if request.method=='POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        if username=='':
            context['error'] = "Username is empty !"
            return render(request,'login.html',context)
        if password=='':
            context['error'] = "Password is empty !"
            return render(request,'login.html',context)
        user = authenticate(request,username=username,password=password)
        if user is not None:
            login(request,user)
            return redirect('home')
        else:
            context['error'] = "Username or password was entered incorrectly !"
    return render(request,'login.html',context)

def sigin_up(request):
    context = {}
    if request.method=='POST':
        username = request.POST.get('username')
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        password = request.POST.get('password')
        if username=='' or first_name=='' or last_name=='' or password=='':
            context['error'] = "Fill in the information !"
            return render(request,'register.html',context)
        user_name = User.objects.filter(username=username)
        if len(user_name)!=0:
            context['error'] = "Such a user exists !"
            return render(request,'register.html',context)
        my_user = User.objects.create(username=username,first_name=first_name,last_name=last_name)
        my_user.set_password(password)
        my_user.save()
        return redirect('sigin_in')
    return render(request,'register.html',context)

@login_required
def logout_user(request):
    logout(request)
    return redirect('sigin_in')

@login_required
def home(request):
    context = {}
    context['objects_list'] = Product.objects.filter(author=request.user).order_by('-pk') 
    return render(request,'index.html',context)

@login_required
def create_product(request):
    context = {}
    if request.method=='POST':
        product_name = request.POST.get('product_name')
        product_price = request.POST.get('product_price')
        if product_name=='' or product_price=='':
            context['error'] = 'Enter the information'
            return render(request,'create_proudct.html',context)
        product = Product(product_name=product_name,product_price=float(product_price),author=request.user)
        product.save()
        return redirect('home')
    return render(request,'create_proudct.html',context)

@login_required
def delete_product(request,pk):
    product = Product.objects.get(id=pk)
    product.delete()
    return redirect('home')

@login_required
def update_product(request,pk):
    context = {}
    context['product'] = Product.objects.filter(id=pk)[0]
    if request.method=='POST':
        product_name = request.POST.get('product_name')
        product_price = request.POST.get('product_price')
        if product_name=='' or product_price=='':
            context['error'] = 'Enter the information'
            return render(request,'update_product.html',context)
        context['product'].product_name=product_name
        context['product'].product_price=product_price
        context['product'].save()
        return redirect('home')
    return render(request,'update_product.html',context)