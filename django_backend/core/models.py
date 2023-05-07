import random
import uuid
from django.db import models
import os
from django.utils import timezone
import string

# Create your models here.

# class Files(models.Model):
#     videos = models.FileField(upload_to='store/videos/')

#     def __str__(self):
#         return self.videos
    
# def filepath(request, filename):
#     old_filename = filename
#     filename = "%s%s"
#     return os.path.join('upload/', filename)

# class File(models.Model):
#     file = models.FileField(upload_to='uploads/%Y/%m/%d/')

# class File(models.Model):
#     name = models.CharField(max_length=255)
#     filename = models.FileField(upload_to='uploads/')
#     uploaded_at = models.DateTimeField(auto_now_add=True)

def upload_path(instance, dataname):
    return '/'.join(['upload', str(instance.filename), dataname])



class Files(models.Model):

   
    filename = models.FileField( upload_to='upload_path')
    ref_id = models.CharField(max_length=10, unique=True)
    expiration_time =models.DateTimeField(default=timezone.now() + timezone.timedelta(seconds=20))

    def save(self, *args, **kwargs):
        if not self.ref_id:
            self.ref_id = generate_ref_id() # Generate a unique reference ID if one doesn't exist already
        super().save(*args, **kwargs)

    def __str__(self):
        return self.filename

    class Meta:
        db_table = 'userdata'


def generate_ref_id():
    ref_id = str(uuid.uuid4().int)[:10] # Get a random 128-bit integer and convert it to a string, then take the first 10 characters
    letters = string.ascii_letters
    digits = string.digits
    ref_id = ''.join(random.choice(letters + digits) for _ in range(10)) # Join 10 randomly chosen letters and digits
    return ref_id
   



    

