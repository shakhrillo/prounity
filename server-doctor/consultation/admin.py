from django.contrib import admin
from consultation.models import Consultation


class NewConsultation(admin.ModelAdmin):
    model = Consultation
    list_display = ["id", "doctor_id", "user_id", 'create_date']


admin.site.register(Consultation, NewConsultation)