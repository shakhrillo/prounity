from django.contrib import admin
from shop_news.models import *

class NewNews(admin.ModelAdmin):
    model = News
    list_display = ["id", "title"]


admin.site.register(News, NewNews)


class NewDrugs(admin.ModelAdmin):
    model = Drugs
    list_display = ["id", "name", "price", "quantity"]


admin.site.register(Drugs, NewDrugs)


class NewBayDrugs(admin.ModelAdmin):
    model = BayDrugs
    list_display = ["id", "user_id"]


admin.site.register(BayDrugs, NewBayDrugs)