from django.contrib import admin
from . import models
# Register your models here.

admin.site.register([
    models.Tag,
    models.Question,
    models.Choice,
    models.Answer
])
