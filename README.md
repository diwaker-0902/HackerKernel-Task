## Project Name 
Node.js Task Management Web App

This is a simple Task Management Web Application built using Node.js, Express, MySQL, Objection.js (ORM), and Handlebars (template engine). The application allows an admin to:

## Admin

-Create new users
-Assign tasks to users
-View users and their tasks
-Export users and tasks into an Excel file
-Fetch tasks related to a user via API


## Tech Stack Used

-Backend Framework: Node.js with Express
-Database: MySQL
-ORM: Objection.js (built on top of Knex.js)
-View Engine: Handlebars (hbs)
-Excel Export: ExcelJS
-Validation: JavaScript (client-side)
-Environment Management: dotenv
-knexfile: Query builder for Node.js


## Features Implemented

1. User Management
Add a new user (Name, Email, Mobile)
Validations:
Email format check using RegEx
Mobile must be a 10-digit number

2. Task Assignment
Assign task to an existing user
Task Type: Pending or Done

3. Homepage
Shows list of users along with their tasks (using relation mapping)

4. Excel Export
A button that exports all Users and Tasks into an Excel file with two sheets: Users, Tasks

5. API Endpoint
GET /tasks/:userId → Returns all tasks related to a particular user in JSON format


## How to Run This Project Locally
Step 1: Clone the Repo

git clone https://github.com/your-username/HackerKernel-Task.git
cd HackerKernel-Task

Step 2: Install Dependencies
npm install

Step 3: Setup MySQL Database
Open MySQL shell and create the database:
CREATE DATABASE node_task_app;

Step 4: Setup Environment Variables
Create a .env file in the root directory:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=node_task_app

Step 5: Run Migrations (to create tables) or can create manually also.
This will create the users and tasks tables using our migration files:
**npx knex migrate:latest**
This command uses knexfile.js to connect to the DB and create tables using the files inside migrations/.

Step 6: Start the Server
npx nodemon app.js or node app.js
Your server will run on: http://localhost:3000


## Key Routes

/ (GET): View all users and their tasks

/add-user (GET): Show form to add new user

/add-user (POST): Submit new user

/add-task (GET): Show form to assign task to a user

/add-task (POST): Submit task for user

/export (GET): Export all data to Excel

/tasks/:userId (GET): Return tasks for user in JSON

############################################################################################################################
############################################################################################################################

##  Candidate Summary
I'm Diwaker Singh, a recent B.Tech graduate in Information Technology with a strong passion for Backend Development.

With 7 months of hands-on experience through remote internships at Celebal Technologies, Jaipur and Shiwansh Solutions, Mohali, I’ve worked with Node.js, Express.js, and MongoDB to build robust backend systems.

I am currently diving deeper into Java Backend Development, exploring Spring Boot, REST APIs, and Microservices.

[View My Resume](https://drive.google.com/file/d/1o4_TUTaMMtltsib8RmKFOL21ClIsiu7t/view?usp=sharing)

## Contact

-  Contact Number : +91 7877193269
-  Email: **diwaker.singh0902@gmail.com**  
-  LinkedIn: [linkedin.com/in/dev-diwaker](https://www.linkedin.com/in/dev-diwaker)  
-  GitHub: [github.com/diwaker-0902](https://github.com/diwaker-0902)
