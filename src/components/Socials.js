import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Socials = () => {
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
        <li className="mr3">
          <a href="https://www.facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </li>
        <li className="mr3">
          <a href="https://www.twitter.com/yourtwitterpage" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </li>
        <li className="mr3">
          <a href="https://www.instagram.com/yourinstagrampage" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Socials;
