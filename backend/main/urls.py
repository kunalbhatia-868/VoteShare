from django.urls import path
from . import views


urlpatterns = [
    path('questions/<int:pk>', views.question_crud_api, name="question_crud"),
    path('questions/', views.question_list_api, name="questions"),
    path('create_question/', views.question_create_api, name="create_question")

]
