from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Note(models.Model):
    # user = models.ForeignKey(User,on_delete=models.CASCADE,null=True,blank=True)
    title = models.TextField(null=True,blank=True)
    completed = models.BooleanField(default=False)

    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.title[0:40])

