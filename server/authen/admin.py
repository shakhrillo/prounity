""" Django settings admin """
from django.contrib import admin
from authen.models import (
    Currency,
    Frequency,
    ExpeectedSalary,
    EmployemntType,
    JobLevel,
    JobFuncation,
    WorkExperience,
    EduAttinment,
    Education,
    Accocitaed,
    Projects,
    SertificationLicenses,

)


class NewCurrency(admin.ModelAdmin):
    model = Currency
    list_display = ["id", "name"]


admin.site.register(Currency, NewCurrency)


class NewFrequency(admin.ModelAdmin):
    model = Frequency
    list_display = ["id", "name"]


admin.site.register(Frequency, NewFrequency)


class NewExpeectedSalary(admin.ModelAdmin):
    model = ExpeectedSalary
    list_display = ["id", "user_id"]


admin.site.register(ExpeectedSalary, NewExpeectedSalary)


class NewEmployemntType(admin.ModelAdmin):
    model = EmployemntType
    list_display = ["id", "name"]


admin.site.register(EmployemntType, NewEmployemntType)


class NewJobLevel(admin.ModelAdmin):
    model = JobLevel
    list_display = ["id", "name"]


admin.site.register(JobLevel, NewJobLevel)


class NewJobFuncation(admin.ModelAdmin):
    model = JobFuncation
    list_display = ["id", "name"]


admin.site.register(JobFuncation, NewJobFuncation)


class NewWorkExperience(admin.ModelAdmin):
    model = WorkExperience
    list_display = ["id", "job_title", "user_id"]


admin.site.register(WorkExperience, NewWorkExperience)


class NewEduAttinment(admin.ModelAdmin):
    model = EduAttinment
    list_display = ["id", "name"]


admin.site.register(EduAttinment, NewEduAttinment)


class NewEducation(admin.ModelAdmin):
    model = Education
    list_display = ["id", "edu_attainment", "course", "school", "user_id"]


admin.site.register(Education, NewEducation)


class NewAccocitaed(admin.ModelAdmin):
    model = Accocitaed
    list_display = ["id", "name"]


admin.site.register(Accocitaed, NewAccocitaed)


class NewProjects(admin.ModelAdmin):
    model = Projects
    list_display = ["id", "project_name", "user_id"]


admin.site.register(Projects, NewProjects)


class NewSertificationLicenses(admin.ModelAdmin):
    model = SertificationLicenses
    list_display = ["id", "title", "user_id"]


admin.site.register(SertificationLicenses, NewSertificationLicenses)
