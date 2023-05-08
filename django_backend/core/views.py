import datetime
from django.shortcuts import render
from .models import Files, generate_ref_id
from rest_framework import viewsets
from .serializers import FileSerializer
from .models import Files
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import FileSystemStorage

# Create your views here.


class FilesViewSet(viewsets.ModelViewSet):
    queryset = Files.objects.all()
    serializer_class = FileSerializer



@api_view(['POST'])
def upload_file(request):
    if request.method == 'POST' and request.FILES['file','ref-id']:
        file = request.FILES['file']
        ref_id = request.FILES['ref_id']
        fs = FileSystemStorage()
        # ref_id = generate_ref_id() # Generate a unique reference ID
        filename = fs.save(ref_id, file) # Save the file to the file system with the reference ID as the filename
        # Save the reference ID to the MySQL database along with any other file information you want to store
        file_obj = Files.objects.create(file=filename, ref_id=ref_id)
        serializer = FileSerializer(file_obj)
        return Response(serializer.data, status=201)
    return Response({'error': 'Invalid request'}, status=400)


# def upload_file(request):
#     if request.method == 'POST' and request.FILES['myfile']:
#         myfile = request.FILES['myfile']
#         fs = FileSystemStorage()

#         # Set expiration time (e.g. 1 minute from now)
#         expiration_time = datetime.now() + datetime.timedelta(minutes=1)

#         # Save file to disk
#         filename = fs.save(myfile.name, myfile)

#         # Save file details to database
#         file = UploadedFile(name=myfile.name, 
#                             file_path=fs.url(filename), 
#                             expiration_time=expiration_time)
#         file.save()

#         # Schedule file deletion
#         task = DeleteFileTask(file.id)
#         task.schedule(expiration_time)

#         return render(request, 'upload.html', {'message': 'File uploaded successfully.'})
#     else:
#         return render(request, 'upload.html')

# class DeleteFileTask:
#     def __init__(self, file_id):
#         self.file_id = file_id

#     def run(self):
#         file = UploadedFile.objects.get(id=self.file_id)
#         fs = FileSystemStorage()
#         fs.delete(file.name)
#         file.delete()

#     def schedule(self, expiration_time):
#         from background_task.models import Task
#         task = Task(name=f"Delete file {self.file_id}", 
#                     func='app.tasks.DeleteFileTask', 
#                     args=f'[{self.file_id}]', 
#                     schedule=expiration_time)
#         task.save()










