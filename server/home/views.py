''' Django settings '''
from django.shortcuts import render
from django.conf import settings


def recaptcha_view(request):
    ''' Google recaptcha views '''
    context = {}
    context['key'] = settings.RE_CAPTCHA_SITE_KEY
    return render(request, 'recaptcha.html', context)
