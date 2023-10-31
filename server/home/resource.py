from import_export import resources
from home.models import PhoneCode


class ReportResource(resources.ModelResource):
    class Meta:
        model = PhoneCode
