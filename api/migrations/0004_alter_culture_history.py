# Generated by Django 3.2.9 on 2021-11-23 21:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20211123_1511'),
    ]

    operations = [
        migrations.AlterField(
            model_name='culture',
            name='history',
            field=models.CharField(max_length=10000),
        ),
    ]