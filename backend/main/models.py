from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.


class Tag(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Question(models.Model):
    content = models.CharField(max_length=256)
    created_on = models.DateTimeField(default=timezone.now)
    tags = models.ManyToManyField('Tag', related_name="tags")
    choices = models.ManyToManyField('Choice')

    def __str__(self):
        return self.content


class Choice(models.Model):
    content = models.CharField(max_length=100)

    def __str__(self):
        return self.content


class Answer(models.Model):
    question = models.ForeignKey('Question', on_delete=models.CASCADE)
    choice = models.ForeignKey('Choice', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username + " -  " + self.question.content
