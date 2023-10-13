import React, { useState } from 'react';
import companyLogo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  const [comments, setComments] = useState('');

  // Function to handle editing the comments, placeholder for now for future implementation
  const handleEditComments = () => {
    // ....
  };

  return (
    <div className='logo-side-menu'>
      <img src={companyLogo} alt='Company Logo' className='logo' />

      {/* <textarea
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        placeholder='Enter General Comments Here... (a placeholder only, not part of MVP) CRUD only for now'
        className='comments-textarea'
      />
      <button onClick={handleEditComments} className='comment-button'>
        Pin Comment
      </button> */}
      <Link to='/about'>READ: How to Use Stic'K App</Link>
      {/* <div> <em>This is still under construction</em> </div> */}
    </div>
  );
};

export default SideMenu;
