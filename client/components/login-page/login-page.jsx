import React from 'react';
import $ from 'jquery';

import InputBox from './../general/input-box.jsx';

function LoginPage(props) {
  const {changePage} = props;

  return (
    <div className='page-content'>
      <h1>Login</h1>
      <InputBox label='Email' boxId='email-box' currentValue=''/>
      <InputBox type='password' label='Password' boxId='password-box' currentValue=''/>
      <button onClick={sendLogin}>Log in!</button>

      <p className='bottom-link-wrapper'>
        Not a member yet? 
        <span
        className='bottom-link'
        onClick={() => changePage({
          pageName: 'signup',
          navbarVisible: false,
          userData: null
        })}
        >
          Sign up!
        </span>
      </p>
    </div>
  );

  function sendLogin() {
    const email = $('#email-box').val();
    const password = $('#password-box').val();

    if (!email || !password) {
      alert('Both fields are required');
      return;
    }

    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/login',
      data: {email, password},

      success(userData) {
        changePage({
          pageName: 'profile',
          navbarVisible: true,
          userData: userData,
        });
      }
    });
  }
}

module.exports = LoginPage;
