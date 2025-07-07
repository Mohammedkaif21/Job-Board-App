# Job-Board-App
 Mini Job Board App
 A full stack job board application built as Mini project of an internship to demonstrate proficiency.

 Objective
 Build a simple functional job board using React.js, Bootstrap in Frontend and Node.js with Express.jsfor ackend. The app allows users to post jobs, view job details, and applt for jobs.

Tech Stack
Frontend : React.js(functional components with jooks) and Bootstrap for Ui design

Backend : Node.js + Express.js

Database : JSON file(in-memory storage)

Routing : React Router


Features 
Home Page
Lists of job postings with title, company, location and skills company wants in employee

Real-time search functionality

Job Details Page
Shows full job description and "Apply Now" button

Post a Job
Form to submit a new job (title, company, location, description, skill Required)

Submits data to backend via POST

Apply to Job
Form with applicant’s name, email, phone, resume, and cover letter

Submits application to backend

Bonus

Mobile responsive design

React Router-based navigation

Folder Structure (Basic)

/frontend
    src/
        components/
            Header.jsx
            Footer.jsx
            Faq.jsx
        pages/
            ApplyJob.jsx
            Home.jsx
            JobDetails.jsx
            PostJob.jsx
        App.css
        App.jsx   
    package.json         

/backend
    controller/
        jobController.js
        applyController.js
    routes/
        jobRoutes.js
        applyRoutes.js
    data/
        application.json
        job.json
    server.js
    package.json


How to Run:

Backend
cd backend
npm insatall
node index.js

Frontend
cd frontend
npm install
npm run dev

GitHub Repo
https://github.com/Mohammedkaif21/Job-Board-App

Developed By
Name: [Mohd Kaif]
Role: Intern
Email: [mohd.kaif1003@gmail.com]
GitHub: [https://github.com/Mohammedkaif21/Job-Board-App]

