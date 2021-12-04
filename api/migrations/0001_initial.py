# Generated by Django 3.2.9 on 2021-11-23 20:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='City',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('state', models.CharField(max_length=20)),
                ('location', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='culture',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=20)),
                ('title', models.CharField(max_length=30)),
                ('history', models.CharField(max_length=200)),
                ('picture', models.CharField(max_length=30)),
                ('location', models.CharField(max_length=30)),
                ('city', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.city')),
            ],
        ),
    ]