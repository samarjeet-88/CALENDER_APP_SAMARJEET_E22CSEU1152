GOOGLE CALENDER CLONE

A calendar web app where users can browse through dates and add, update, and delete events for the selected date. This project uses the MERN stack (MongoDB, Express, React, Node.js).

TECHNOLOGY USED

REACT, NODE.JS, MONGODB

Architecture

To ensure the structure is preserved on commit, the file tree is enclosed in a code block:

```
CALENDER_APP_SAMARJEET_E22CSEU1152/
├── backend/
│   ├── src/
│   │   ├── controller/
│   │   │   └── event.controller.js
│   │   │
│   │   ├── db/
│   │   │   └── index.js
│   │   │
│   │   ├── models/
│   │   │   ├── dayEvent.model.js
│   │   │   └── event.model.js
│   │   │
│   │   ├── routes/
│   │   │   └── event.routes.js
│   │   │
│   │   ├── app.js
│   │   ├── constants.js
│   │   └── index.js
│   │
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CalenderComponent/
│   │   │   │   ├── Calender.jsx
│   │   │   │   └── CalenderDate.jsx
│   │   │   │
│   │   │   ├── EventComponent/
│   │   │   │   ├── Event.jsx
│   │   │   │   └── Eventpage.jsx
│   │   │
│   │   ├── context/
│   │   │   └── EventContext.jsx
│   │   │
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```


Setup Instructions

1. Clone the Repository

```git clone https://github.com/samarjeet-88/CALENDER_APP_SAMARJEET_E22CSEU1152.git```


2. Configure and Start the Backend

Navigate to the backend directory:

```cd backend```


Install dependencies:

```npm install```


Add a .env file with the following variables:

```
PORT=8000
MONGODB_URL=your_mongodb_connection_string
```


Start the backend server:

```npm run dev```


3. Configure and Start the Frontend

Navigate back to the root directory and into the frontend:

```
cd ..
cd frontend
```


Install dependencies:

```
npm install
```


Start the frontend application:

```
npm run dev
```


Future Enhancements

Add Time to Events: Currently, events are only stored by date. Adding time will allow users to schedule events more precisely.

Add a Navbar: Implement a navigation bar for easier navigation between pages, quick access to calendar views, and improved user experience.

User Authentication (Sign In / Sign Up): Implement JWT-based authentication so that users can create accounts, log in securely, and manage their personal events.
