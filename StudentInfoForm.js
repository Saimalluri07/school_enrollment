// StudentInfoForm.js
import React, { useState } from 'react';
import './StudentInfoForm.css';

const StudentInfoForm = ({ onSubmit }) => {
  const [studentName, setStudentName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ studentName, age, grade });
    setStudentName('');
    setAge('');
    setGrade('');
  };

  return (
    <form className="student-info-form" onSubmit={handleSubmit}>
      <h2>Student Information Form</h2>
      <label>
        Student Name:
        <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <label>
        Grade:
        <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentInfoForm;

