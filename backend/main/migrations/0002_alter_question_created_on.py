# Generated by Django 3.2.8 on 2021-10-06 06:01

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='created_on',
            field=models.DateTimeField(verbose_name=datetime.datetime(2021, 10, 6, 6, 1, 8, 142400, tzinfo=utc)),
        ),
    ]
