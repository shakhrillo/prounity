""" Django modles settings """
from django.db import models
from home.models import CustumUsers


class Currency(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Frequency(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class EmployemntType(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class JobLevel(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class JobFuncation(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class EduAttinment(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Accocitaed(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class ExpeectedSalary(models.Model):
    min_summ = models.FloatField()
    max_summ = models.FloatField()
    currcency_id = models.ForeignKey(Currency, on_delete=models.CASCADE)
    frequency_id = models.ForeignKey(Frequency, on_delete=models.CASCADE)
    user_id = models.ForeignKey(CustumUsers, on_delete=models.CASCADE)
    create_date = models.DateTimeField(auto_now_add=True)

    class ExpeectedSalaryObject(object):
        def __init__(self, user_id):
            self.name = user_id


class WorkExperience(models.Model):
    job_title = models.CharField(max_length=100)
    company = models.CharField(max_length=250)
    location = models.CharField(max_length=250)
    salary = models.FloatField()
    files = models.FileField(
        upload_to='work_experience/',
        null=True,
        blank=True
    )
    from_date = models.DateField()
    to_date = models.DateField(null=True, blank=True)
    description = models.TextField()
    currcency_id = models.ForeignKey(Currency, on_delete=models.CASCADE)
    frequency_id = models.ForeignKey(Frequency, on_delete=models.CASCADE)
    employemnt_type = models.ForeignKey(
        EmployemntType,
        on_delete=models.CASCADE
    )
    job_level = models.ForeignKey(JobLevel, on_delete=models.CASCADE)
    job_funcation = models.ForeignKey(JobFuncation, on_delete=models.CASCADE)
    user_id = models.ForeignKey(CustumUsers, on_delete=models.CASCADE)
    create_date = models.DateTimeField(auto_now_add=True)

    class WorkExperienceObject(object):
        def __init__(self, job_title):
            self.job_title = job_title


class Education(models.Model):
    edu_attainment = models.ForeignKey(EduAttinment, on_delete=models.CASCADE)
    course = models.CharField(max_length=100)
    school = models.CharField(max_length=100)
    from_date = models.DateField()
    to_date = models.DateField(null=True, blank=True)
    is_graduated = models.BooleanField()
    gpa = models.FloatField()
    scale = models.FloatField()
    description = models.TextField()
    files = models.FileField(
        upload_to='education_user/', null=True, blank=True
    )
    user_id = models.ForeignKey(CustumUsers, on_delete=models.CASCADE)
    create_date = models.DateTimeField(auto_now_add=True)

    class EducationObject(object):
        def __init__(self, course):
            self.course = course


class Projects(models.Model):
    project_name = models.CharField(max_length=150)
    role = models.CharField(max_length=100)
    from_date = models.DateField()
    to_date = models.DateField(null=True, blank=True)
    is_current = models.BooleanField(default=False)
    associated_id = models.ForeignKey(Accocitaed, on_delete=models.CASCADE)
    description = models.TextField()
    project_url = models.URLField(null=True, blank=True)
    user_id = models.ForeignKey(CustumUsers, on_delete=models.CASCADE)
    create_date = models.DateTimeField(auto_now_add=True)

    class ProjectObject(object):
        def __init__(self, project_name):
            self.project_name = project_name


class SertificationLicenses(models.Model):
    title = models.CharField(max_length=100)
    organization = models.CharField(max_length=100)
    issue_date = models.DateField()
    expration_date = models.DateField(null=True, blank=True)
    is_active = models.BooleanField(default=False)
    credential_id = models.CharField(max_length=50)
    credential_url = models.URLField()
    user_id = models.ForeignKey(CustumUsers, on_delete=models.CASCADE)
    create_date = models.DateTimeField(auto_now_add=True)

    class SertificationLicensesObject(object):
        def __init__(self, title):
            self.title = title
