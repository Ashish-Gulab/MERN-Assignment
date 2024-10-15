## MERN STACK ASSIGNMENT DOCUMENTATION
### Backend APIs
These APIs allow users to create, view, update, and delete tasks. Below is a detailed description of the endpoints.

### Base URL
http://localhost:8000/api/v1/task

### End Points
#### Creating the Task
#### POST('/create-task')
This endpoint creates a new task.
  #### URL: 'http://localhost:8000/api/v1/task/create-task'
  #### Method: POST
  #### Headers:
    Content-Type: application/json
  #### Body:
    {
      "title": "Task Title",
      "description": "Task Description"
    }
  #### Response: 
  #### 201 Created:
    {
      "success": true,
      "message": "New Task is created",
      "task": {
          "_id": ObjectId('670e0d7ac86f58a8b292a44d'),
          "title": "Java Programming",
          "description": "Java is a programming Language used in creating the backend of the Full Stack Web Application",
          "slug": "java-programming",
          "createdAt": "2024-10-15T06:36:42.748+00:00"
        }
      }

    #### 401 Unauthorized:
        {
          "message": "Title is Required"
        }

    #### 200 OK(Conflict):
        {
          "success": false,
          "message": "Task with similar title already exists. Select a different task name."
        }


