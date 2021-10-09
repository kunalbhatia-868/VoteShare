from django.urls import path
from . import views


urlpatterns = [
    path('questions/<int:pk>', views.question_crud_api, name="question_crud"),
    path('questions/', views.question_list_api, name="questions"),
    path('create_question/', views.question_create_api, name="create_question"),
    path('choices/<int:question_id>', views.choice_list_api, name="ques_choices"),
    path('tags/', views.tags_list_api, name="tags"),

]
