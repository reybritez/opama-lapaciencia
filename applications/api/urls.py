from django.urls import path

from . import views


app_name = 'api'
urlpatterns = [
    path(f'test/biggest-spender', views.Biggest_Spender.as_view(), name='biggest_spender'),
    path(f'test/tu_bus_de_la_suerte', views.TuBus.as_view(), name='tu_bus_de_la_suerte'),
]
