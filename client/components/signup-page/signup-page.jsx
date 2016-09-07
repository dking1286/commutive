import React from 'react';
import $ from 'jquery';

import InputBox from './../general/input-box.jsx';

function SignupPage(props) {
  const {changePage} = props;

  return (
    <div className='signup-page'>
      <p onClick={() => changePage({pageName: 'login'})}>
        Already a member? Log in!
      </p>
      <InputBox label='Email' boxId='email-box' currentValue=''/>
      <InputBox label='First Name' boxId='first-name-box' currentValue=''/>
      <InputBox label='Last Name' boxId='last-name-box' currentValue=''/>
      <InputBox type='password' label='Password' boxId='password-box' currentValue=''/>
      <button onClick={sendSignup}>Sign up!</button>
    </div>
  );


  // This function needs to be inside of SignupPage so that it
  // has access to changePage
  function sendSignup() {
    const email = $('#email-box').val();
    const firstName = $('#first-name-box').val();
    const lastName = $('#last-name-box').val();
    const password = $('#password-box').val();

    if (!email || !firstName || !lastName || !password) {
      alert('All four fields are required');
      return;
    }

    const sendData = {email, firstName, lastName, password};
    console.log('Sending', sendData);

    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/signup',
      data: sendData,

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

module.exports = SignupPage;
