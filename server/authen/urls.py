from django.urls import path
from authen.views import (
    # User CRUD Urls
    UserSigInViews,
    UserSignUpViews,
    CheckSmsCode,
    UserUpdateView,
    change_password,
    UserProfilesViews,
    # User Information Urls
    CurrencyListViews,
    FrequencyListViews,
    ExpeectedSalaryListViews,
    ExpeectedSalaryCRUDViews,
    EmployemntTypeListViews,
    JobLevelListViews,
    JobFuncationListViews,
    WorkExperienceListViews,
    WorkExperienceCrudViews,
    # Education
    EduAttinmentListViews,
    EducationListViews,
    EducationCrudViews,
    # Projects
    AccocitaedListViews,
    ProjectsListViews,
    ProjectCrudViews,
    # Sertification Licenses
    SertificationLicensesViews,
    SertificationLicensesCrudViews,
    FacebookSocialAuthView,
    GoogleSocialAuthView,
    PhoneCodeViews,

)


urlpatterns = [
    # User CRUD Urls
    path('google/', GoogleSocialAuthView.as_view()),
    path('facebook/', FacebookSocialAuthView.as_view()),
    path('user_sigin_views/', UserSigInViews.as_view()),
    path('user_signup_views/', UserSignUpViews.as_view()),
    path('check_sms_code/', CheckSmsCode.as_view()),
    path('user_update_view/', UserUpdateView.as_view()),
    path('change_password/', change_password, name='change_password'),
    path('user_profiles_views/', UserProfilesViews.as_view()),
    path('phone_code_views/', PhoneCodeViews.as_view()),
    # User Information Urls
    path('currency_list_views/', CurrencyListViews.as_view()),
    path('rrequency_list_views/', FrequencyListViews.as_view()),
    path('expeected_salary_list_views/', ExpeectedSalaryListViews.as_view()),
    path(
        'expeected_salary_views/<int:exs_id>/',
        ExpeectedSalaryCRUDViews.as_view()
    ),
    path('employemnt_type_list_views/', EmployemntTypeListViews.as_view()),
    path('job_level_list_views/', JobLevelListViews.as_view()),
    path('job_funcation_list_views/', JobFuncationListViews.as_view()),
    path('work_experience_list_views/', WorkExperienceListViews.as_view()),
    path(
        'work_experience_crud_views/<int:ex_id>/',
        WorkExperienceCrudViews.as_view()
    ),
    # Educations
    path('edu_attinment_list_views/', EduAttinmentListViews.as_view()),
    path('education_list_views/', EducationListViews.as_view()),
    path('education_crud_views/<int:edu_id>/', EducationCrudViews.as_view()),
    # Projects
    path('accocitaed_list_views/', AccocitaedListViews.as_view()),
    path('projects_list_views/', ProjectsListViews.as_view()),
    path('project_crud_views/<int:porject_id>/', ProjectCrudViews.as_view()),
    # Sertification Licenses
    path(
        'sertification_licenses_views/',
        SertificationLicensesViews.as_view()
    ),
    path(
        'sertification_licenses_crud_views/<int:ser_id>/',
        SertificationLicensesCrudViews.as_view()
    ),

]
