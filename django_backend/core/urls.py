from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FilesViewSet,upload_file
from core.views import FilesViewSet



router = DefaultRouter()
router.register('file', FilesViewSet, basename='file')


urlpatterns = [
    path('upload/', upload_file, name='upload_file'),
    path('api/', include(router.urls)),

]
