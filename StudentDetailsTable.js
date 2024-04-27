
import React from 'react';
import './StudentDetailsTable.css';

const StudentDetailsTable = ({ students }) => {
  return (
    <div className="student-details-table">
      <h2>Student Details</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Age</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.studentName}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDetailsTable;
