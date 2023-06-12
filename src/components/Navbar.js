import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Navbar = () => {
  return (
    <nav className="pa3 bg-light-blue">
      <ul className="list flex justify-between">
        <li className="mr3">
          <Link to="/">Home</Link>
        </li>
        <li className="mr3">
          <Link to="/about">About</Link>
        </li>
        <li className="mr3">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="mr3">
          <Link to="/podcast">Podcast</Link>
        </li>
        <li className="mr3">
          <Link to="/forum">Forum</Link>
        </li>
        <li className="mr3">
          <Link to="/step-by-step-guide">Step-by-Step Guide</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
