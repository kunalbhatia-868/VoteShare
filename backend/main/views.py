import re
from django.shortcuts import render
from . import models, serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


@api_view(['GET'])
def question_list_api(request):
    questions = models.Question.objects.all()
    response = serializers.QuestionSerializer(questions, many=True)
    return Response(response.data)


@api_view(['POST'])
def question_create_api(request):
    response = serializers.QuestionSerializer(data=request.data)
    if response.is_valid():
        tags = []
        for tag in request.data['tags']:
            tags.append(tag['id'])
        response.validated_data['tags'] = tags
        response.save()
        return Response(response.data, status=status.HTTP_201_CREATED)
    return Response(response.data, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'DELETE'])
def question_crud_api(request, pk):
    if request.method == 'GET':
        try:
            question = models.Question.objects.get(id=pk)
            response = serializers.QuestionSerializer(question)
            return Response(response.data)
        except question.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    elif request.method == 'DELETE':
        try:
            question = models.Question.objects.get(id=pk)
            question.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except question.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
