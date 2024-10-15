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

#### Getting All the Tasks
#### GET('/all-tasks')
This endpoint is getting all the tasks stored in the database.
  #### URL: 'http://localhost:8000/api/v1/task/all-tasks'
  #### Method: GET
  #### Response: 
  #### 200 OK:
    {
      "success": true,
      "message": "All Tasks Lists",
      "task": [{
          "_id": ObjectId('670e0d7ac86f58a8b292a44d'),
          "title": "Java Programming",
          "description": "Java is a programming Language used in creating the backend of the Full Stack Web Application",
          "slug": "java-programming",
          "createdAt": "2024-10-15T06:36:42.748+00:00"
        },
        {
          "_id": ObjectId('670d0159344ad8270590ad00'),
          "title": "MERN Stack",
          "description": "MERN Stack is used to build Web Application",
          "slug": "mern-stack",
          "createdAt": "2024-10-14T11:32:41.526Z"
        }
      ]
    }

  #### 500 Internal Server Error:
        {
          "success": false,
          "message": "Error while getting all tasks",
          "error": {}
        }

#### Getting the single Task
#### GET('/single-task/:slug')
This endpoint is getting the single task stored in the database.
  #### URL: 'http://localhost:8000/api/v1/task/single-task/java-programming'
  #### Method: GET
  #### Response: 
  #### 200 OK:
    {
      "success": true,
      "message": "Task accessed properly",
      "task": {
          "_id": ObjectId('670e0d7ac86f58a8b292a44d'),
          "title": "Java Programming",
          "description": "Java is a programming Language used in creating the backend of the Full Stack Web Application",
          "slug": "java-programming",
          "createdAt": "2024-10-15T06:36:42.748+00:00"
        }
    }

   #### 404 Not Found:
        {
          "message": "Task not Found"
        }

  #### 500 Internal Server Error:
        {
          "success": false,
          "message": "Error while getting the task",
          "error": {}
        }

#### Updating the Task
#### PUT('/update-task/:id')
This endpoint update the task stored in the database.
  #### URL: 'http://localhost:8000/api/v1/task/update-task/670e0d7ac86f58a8b292a44d'
  #### Method: PUT
  #### Headers:
    Content-Type: application/json
  #### Body:
    {
      "title": "Java Programming Language",
      "description": "Java is a programming Language used in creating the backend of the Full Stack Web Application"
    }
  #### Response: 
  #### 201 Created:
    {
      "success": true,
      "message": "Task is updated successfully",
      "task": {
          "_id": ObjectId('670e0d7ac86f58a8b292a44d'),
          "title": "Java Programming Language",
          "description": "Java is a programming Language used in creating the backend of the Full Stack Web Application",
          "slug": "java-programming-language",
          "createdAt": "2024-10-15T06:36:42.748+00:00",
          "updatedAt": "2024-10-15T08:06:08.168+00:00"
        }
    }

   #### 401 Unauthorized:
        {
          "message": "Task Title is Required"
        }

  #### 500 Internal Server Error:
        {
          "success": false,
          "message": "Error while updating the task",
          "error": {}
        }

#### Deleting the Task
#### DELETE('/delete-task/:id')
This endpoint delete the task stored in the database.
  #### URL: 'http://localhost:8000/api/v1/task/delete-task/670e0d7ac86f58a8b292a44d'
  #### Method: DELETE
  #### Response: 
  #### 200 OK:
    {
      "success": true,
      "message": "Task deleted successfully",
    }

  #### 500 Internal Server Error:
        {
          "success": false,
          "message": "Error while deleting the task",
          "error": {}
        }

