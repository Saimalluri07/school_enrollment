import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/schedule-meeting">Schedule Meeting</Link>
        </li>
        <li>
          <Link to="/meeting-table">Meeting Table</Link>
        </li>
        <li>
          <Link to="/student-info">Student Info</Link>
        </li>
        <li>
          <Link to="/student-details">Student Details</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li> {/* Add a link to the login page */}
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
