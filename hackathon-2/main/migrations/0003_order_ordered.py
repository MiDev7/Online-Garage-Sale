# Generated by Django 4.1.1 on 2022-10-07 08:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_remove_orderitem_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='ordered',
            field=models.BooleanField(default=False, null=True),
        ),
    ]
