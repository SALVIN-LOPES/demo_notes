from rest_framework.response import Response
from .models import Note
from .serializers import NoteSerializer
from django.contrib.auth.models import User
from rest_framework.decorators import api_view


def getNotesList(request):
    # user=request.user

    # notes = Note.objects.filter(user = user.id)
    notes = Note.objects.all()
    serializer = NoteSerializer(notes,many=True)
    return Response(serializer.data)

def getNoteList(request,pk):
    note = Note.objects.filter(id=pk).first()
    serializer = NoteSerializer(note)
    return Response(serializer.data)

def createNote(request):
    data = request.data
    # user = request.user
    print("data =",data)
    print("user create =",request.user)
    note = Note.objects.create(
         title = data['title'],
    )
    if note is not None:
        serializer = NoteSerializer(note,many=False)
        return Response(serializer.data)
    return Response({"detail" : "Note not created!!"})
    

def updateNote(request,pk):
    data = request.data
    note = Note.objects.filter(id=pk).first()
    serializer = NoteSerializer(instance=note,data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

def deleteNote(request,pk):
    note = Note.objects.filter(id=pk).first()
    note.delete()
    return Response("note was deleted")