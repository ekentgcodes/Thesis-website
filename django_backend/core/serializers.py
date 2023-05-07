from rest_framework import serializers
from .models import Files




class FileSerializer(serializers.HyperlinkedModelSerializer):
    ref_id = serializers.CharField(read_only=True)

    class Meta:
        model = Files
        fields = 'filename','expiration_time', 'ref_id'





 