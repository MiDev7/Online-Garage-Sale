# Generated by Django 4.1.1 on 2022-10-07 23:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_orderitem_customer'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orderitem',
            name='customer',
        ),
    ]
