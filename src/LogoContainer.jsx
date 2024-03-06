import React from 'react';
import logo from './assets/noteyo.png';

const LogoContainer = () => {
  return (
    <div className='d-flex flex-row justify-content-center align-items-center mb-4'>
        <img src={logo} height="55" alt="noteyo logo" />
        <h1 className='font-weight-light px-3 mt-3'>NoteYo</h1>
    </div>
  );
}

export default LogoContainer;
