from django.urls import path
from django.views.generic import TemplateView

from . import views


app_name = 'content'
urlpatterns = [
    path('docs/', views.Docs, name='docs'),
    path('opama/mateo_torres', views.Opama_Mateo_Torres, name='opama_mateo_torres'),
    path('opama/lucho_benitez/', views.Opama_Lucho_Benitez, name='opama_lucho_benitez'),
    path('opama/karl_niebuhr/', views.Opama_Karl_Niebuhr, name='opama_karl_niebuhr'),
]
