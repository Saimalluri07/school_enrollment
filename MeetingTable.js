import React, { useState } from 'react';
import './MeetingTable.css';

const MeetingTable = ({ meetings, onDelete, onUpdate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editedMeeting, setEditedMeeting] = useState({});

  const handleDelete = (index) => {
    onDelete(index);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedMeeting(meetings[index]);
  };

  const handleSave = () => {
    onUpdate(editIndex, editedMeeting);
    setEditIndex(null);
    setEditedMeeting({});
  };

  return (
    <div className="meeting-table">
      <h2>Meeting Table</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Child's Name</th>
            <th>Parent's Name</th>
            <th>Meeting Date</th>
            <th>Meeting Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting, index) => {
            if (
              meeting.childName.toLowerCase().includes(searchTerm.toLowerCase()) ||
              meeting.parentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
              meeting.meetingDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
              meeting.meetingTime.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return (
                <tr key={index}>
                  <td>{editIndex === index ? <input type="text" value={editedMeeting.childName || ''} onChange={(e) => setEditedMeeting({...editedMeeting, childName: e.target.value})} /> : meeting.childName}</td>
                  <td>{editIndex === index ? <input type="text" value={editedMeeting.parentName || ''} onChange={(e) => setEditedMeeting({...editedMeeting, parentName: e.target.value})} /> : meeting.parentName}</td>
                  <td>{editIndex === index ? <input type="text" value={editedMeeting.meetingDate || ''} onChange={(e) => setEditedMeeting({...editedMeeting, meetingDate: e.target.value})} /> : meeting.meetingDate}</td>
                  <td>{editIndex === index ? <input type="text" value={editedMeeting.meetingTime || ''} onChange={(e) => setEditedMeeting({...editedMeeting, meetingTime: e.target.value})} /> : meeting.meetingTime}</td>
                  <td>
                    {editIndex === index ? (
                      <button onClick={handleSave}>Save</button>
                    ) : (
                      <React.Fragment>
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                      </React.Fragment>
                    )}
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MeetingTable;
