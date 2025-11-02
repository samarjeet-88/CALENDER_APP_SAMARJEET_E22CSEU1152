# GOOGLE CALENDER CLONE

A calender webapp where user can browse through dates and add,update and delete event for the selected date

---

## TECHNOLOGY USED
REACT, NODE.JS, MONGODB


## ARCHITECTURE/FILE STRUCTURE
backend
.
├── src/
│   ├── controller/
│   │     ├── event.controller.js
│   │                       
│   ├── db/
│   │   ├── index.js
│   │   
│   ├── models/
│   │   ├── dayEvent.model.js
│   │   └── event.model.js
│   │  
│   ├── routes/
│   │   └── event.routes.js
│   │  
│   └── app.js
│   └── constants.js
│   └── index.js
├── .env
├── package.json

frontend
.
├── src/
│   ├── components/
│   │     ├── CalenderComponent/
│   │     │    ├── Calender.jsx
│   │     │    └── CalenderDate.jsx
│   │     ├── CalenderComponent/
│   │     │    ├── Event.jsx
│   │     │    └── Eventpage.jsx
│   │     │                    
│   ├── context/
│   │   ├── EventContext.jsx 
│   │  
│   └── App.css
│   └── App.jsx
│   └── index.css
│   └── main.jsx
├── package.json




## Setup Instructions

### 1. Clone the Repository
git clone <https://github.com/samarjeet-88/CALENDER_APP_SAMARJEET_E22CSEU1152.git>

### 2. GO TO BACKEND
cd backend
npm install
add .env file with variables as 
PORT=8000
MONGODB_URL=your_mongodb_connection_string

### 3.START THE BACKEND
npm run dev

### 4. GO TO FRONTEND
cd ..
cd frontend
npm install

### 5. START THE BACKEND
npm run dev


## Future Enhancements
- **Add Time to Events**: Currently, events are only stored by date. Adding time will allow users to schedule events more precisely.  
- **Add a Navbar**: Implement a navigation bar for easier navigation between pages, quick access to calendar views, and improved user experience.  
- **User Authentication (Sign In / Sign Up)**: Implement JWT-based authentication so that users can create accounts, log in securely, and manage their personal events.

- **Add Time to Events**: Currently, events are only stored by date. Adding time will allow users to schedule events more precisely.  
- **Add a Navbar**: Implement a navigation bar for easier navigation between pages, quick access to calendar views, and improved user experience.  
- **User Authentication (Sign In / Sign Up)**: Implement JWT-based authentication so that users can create accounts, log in securely, and manage their personal events.  



