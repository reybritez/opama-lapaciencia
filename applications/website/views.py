from django.shortcuts import render

#Diseño de la página de Inicio
def landing_page(request):
    return render(request, "website/landing_page.html")

def Biggest_Spender(request):
    return render(request, "applications/example_react/biggest_spender.html")

def TuBusDeLaSuerte(request):
    return render(request, "applications/example_react/tu_bus_de_la_suerte.html")