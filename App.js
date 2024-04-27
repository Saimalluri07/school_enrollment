import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ScheduleMeetingForm from './ScheduleMeetingForm';
import MeetingTable from './MeetingTable';
import StudentInfoForm from './StudentInfoForm';
import StudentDetailsTable from './StudentDetailsTable';
import Signup from './Signup';
import Login from './Login'; // Import the Login component

const App = () => {
  const [meetings, setMeetings] = useState([]);
  const [students, setStudents] = useState([]);

  const handleMeetingFormSubmit = (meeting) => {
    setMeetings([...meetings, meeting]);
  };

  const handleStudentFormSubmit = (student) => {
    setStudents([...students, student]);
  };

  const handleUpdateMeeting = (index, updatedMeeting) => {
    const updatedMeetings = [...meetings];
    updatedMeetings[index] = updatedMeeting;
    setMeetings(updatedMeetings);
  };

  const handleDeleteMeeting = (index) => {
    const updatedMeetings = [...meetings];
    updatedMeetings.splice(index, 1);
    setMeetings(updatedMeetings);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/schedule-meeting"
            element={<ScheduleMeetingForm onSubmit={handleMeetingFormSubmit} />}
          />
          <Route
            path="/meeting-table"
            element={<MeetingTable meetings={meetings} onDelete={handleDeleteMeeting} onUpdate={handleUpdateMeeting} />}
          />
          <Route
            path="/student-info"
            element={<StudentInfoForm onSubmit={handleStudentFormSubmit} />}
          />
          <Route
            path="/student-details"
            element={<StudentDetailsTable students={students} />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route // Add the login route
            path="/login"
            element={<Login />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
