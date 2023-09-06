# SimpleTodo - Your Task Management Solution

![Alt text](<frontend/notes/src/utils/images/Screenshot (583).png>)

SimpleTodo is a lightweight and easy-to-use Todo application designed to help you stay organized and productive. Whether you're managing your daily tasks, tracking important deadlines, or just making a grocery list, SimpleTodo has you covered.
This application is created using ReactJS (front-end) & Django (back-end).

## Getting Started

Follow these steps to get started with simpleNotes Website:

Clone this repository to your local machine using:

```ruby
git clone https://github.com/SALVIN-LOPES/demo_notes.git
```

Check if Python is installed.

Run the following command to test if python is installed or not.

```
python --version
```

After cloning the repository there will be 2 folders backend & frontend in backend folder there will be django installed & in frontend folder there will be another folder called "notes" in notes folder there will be ReactJS Installed.

## How to run backend Server :

Follow the below steps to run backend server :

```
cd backend
```

Install pip

[Documentation](https://www.geeksforgeeks.org/how-to-install-pip-on-windows/?ref=gcse)

for windows : activation of env (environment variable)

```
pip install  virtualenv
virtualenv env
env\scripts\activate
```

Install all the packages from requirements.txt file

```ruby
pip install -r requirements.txt
```

Run the backend server : Django

```
py manage.py runserver
```

Now backend server will be live at url : http://127.0.0.1:8000/
Since no url matching the base url no api's will be displayed !!

## How to run frontend Server :

```
cd frontend/notes
npm install
npm start
```

Open your web browser and Enter the Url

```
http://localhost:3000/
```
