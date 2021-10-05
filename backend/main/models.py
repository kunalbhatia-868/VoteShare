from django.db import models
from django.utils import timezone

# Create your models here.


class Tag(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Question(models.Model):
    content = models.CharField(max_length=256)
    created_on = models.DateTimeField(timezone.now())
    tags = models.ManyToManyField('Tag')

    def __str__(self):
        return self.content


class Choice(models.Model):
    content = models.CharField(max_length=100)
    question = models.ForeignKey('Question', on_delete=models.CASCADE)

    def __str__(self):
        return self.content
