from rest_framework import serializers
from . import models
from django.contrib.auth.models import User


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Tag
        fields = '__all__'


class QuestionSerializer(serializers.ModelSerializer):
    tags = TagSerializer(read_only=True, many=True)

    class Meta:
        model = models.Question
        fields = '__all__'


class ChoiceSerializer(serializers.ModelSerializer):
    question = QuestionSerializer(read_only=True)

    class Meta:
        model = models.Choice
        fields = '__all__'


class AnswerSerializer(serializers.Serializer):
    question = QuestionSerializer(read_only=True)
    choice = ChoiceSerializer(read_only=True)

    class Meta:
        models = models.Answer
        exclude = ['user']
