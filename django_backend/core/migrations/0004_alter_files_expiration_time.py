# Generated by Django 4.1.4 on 2023-05-07 08:57

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_alter_files_expiration_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='files',
            name='expiration_time',
            field=models.DateTimeField(default=datetime.datetime(2023, 5, 7, 8, 57, 46, 548155, tzinfo=datetime.timezone.utc)),
        ),
    ]