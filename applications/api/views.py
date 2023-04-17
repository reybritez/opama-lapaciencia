from django.shortcuts import render
import pandas as pd
from rest_framework.views import APIView
from rest_framework.response import Response


class Test_Table(APIView):
    '''Demonstration of API 01'''
    def get(self, request):
        self.data = pd.read_excel(f'./static/database/data.xlsx').fillna(value='null')
        return Response(self.data.to_dict(orient='records'))


class Test_FactGenerator(APIView):
    '''Demonstration of API 02'''
    def get(self, request):
        self.data = pd.read_json(f'./static/database/FactGenerator.json')
        return Response(self.data.to_dict(orient='records'))
    

class Biggest_Spender(APIView):
    '''Mayor gastador de tarjetas del 2022 y 2023'''
    def get(self, request):
        self.data = pd.read_csv(f'./static/database/biggest_spender.csv').fillna(value='null')
        return Response(self.data.to_dict(orient='records'))


class TuBus(APIView):
    '''Catalogo de Rutas del año 2023'''
    def get(self, request):
        self.data = pd.read_excel(f'./static/database/catalogo_de_rutas_2023.xlsx').fillna(value='null')
        return Response(self.data.to_dict(orient='records'))