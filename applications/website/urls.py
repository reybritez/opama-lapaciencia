from django.urls import path
from django.views.generic import TemplateView

from . import views


app_name = 'website'
urlpatterns = [
    path('', views.landing_page, name='landing_page'),
    # React Frontend Examples
    path('react/biggest-spender/', views.Biggest_Spender, name='biggest_spender'),
    path('react/tu_bus_de_la_suerte/', views.TuBusDeLaSuerte, name='tu_bus_de_la_suerte'),
    path('react/component/', views.Example_React_Component, name='react_component'),
]
