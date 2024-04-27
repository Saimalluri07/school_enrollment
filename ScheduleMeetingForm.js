// ScheduleMeetingForm.js
import React, { useState } from 'react';
import './ScheduleMeetingForm.css';

const ScheduleMeetingForm = ({ onSubmit }) => {
  const [childName, setChildName] = useState('');
  const [parentName, setParentName] = useState('');
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingTime, setMeetingTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ childName, parentName, meetingDate, meetingTime });
    setChildName('');
    setParentName('');
    setMeetingDate('');
    setMeetingTime('');
  };

  return (
    <form className="schedule-meeting-form" onSubmit={handleSubmit}>
      <h2>Schedule Meeting</h2>
      <label>
        Child's Name:
        <input type="text" value={childName} onChange={(e) => setChildName(e.target.value)} />
      </label>
      <label>
        Parent's Name:
        <input type="text" value={parentName} onChange={(e) => setParentName(e.target.value)} />
      </label>
      <label>
        Meeting Date:
        <input type="date" value={meetingDate} onChange={(e) => setMeetingDate(e.target.value)} />
      </label>
      <label>
        Meeting Time:
        <input type="time" value={meetingTime} onChange={(e) => setMeetingTime(e.target.value)} />
      </label>
      <button type="submit">Schedule Meeting</button>
    </form>
  );
};

export default ScheduleMeetingForm;
