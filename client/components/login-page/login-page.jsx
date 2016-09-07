import React from 'react';
import $ from 'jquery';

import InputBox from './../general/input-box.jsx';

function LoginPage(props) {
  const {changePage} = props;

  return (
    <div className='login-page'>
      <p onClick={() => changePage({pageName: 'signup'})}>
        Not a member yet? Sign up!
      </p>
      <InputBox label='Email' boxId='email-box' currentValue=''/>
      <InputBox label='Password' boxId='password-box' currentValue=''/>
      <button onClick={sendLogin}>Log in!</button>
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
      url: 'https://localhost:3000/signup',
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
