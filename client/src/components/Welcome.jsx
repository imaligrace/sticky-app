import React from 'react';

const Welcome = () => {
  setTimeout(() => {
    window.location.href = '/';
  }, 3000);

  return <h1>WELCOME TO STIC'K --- This page is under construction</h1>;
};

export default Welcome;
