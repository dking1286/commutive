import React from 'react';
import $ from 'jquery';

import InputBox from './../general/input-box.jsx'

function ProfilePage(props) {
  const {userData, changePage} = props;

  const {email, commuteTime, commuteDistance, hourlyPay} = userData;

  return (
    <div className='page-content'>
      <h1>Your profile</h1>
      <h3>Tell us about your commute...</h3>
      <InputBox
      label='One-way commute time in hours (e.g. 0.75)'
      boxId='commute-time'
      currentValue={commuteTime}
      />

      <InputBox
      label='One-way commute distance in miles (e.g. 12)'
      boxId='commute-distance'
      currentValue={commuteDistance}
      />

      <InputBox
      label='Hourly pay in dollars (e.g. 15)'
      boxId='hourly-pay'
      currentValue={hourlyPay}
      />

      <button onClick={updateUserData}>Submit</button>
    </div>
  );


  function updateUserData() {
    // Get info from text boxes
    const newCommuteTime = $('#commute-time').val();
    const newCommuteDistance = $('#commute-distance').val();
    const newHourlyPay = $('#hourly-pay').val();

    // Send info in post request to server
    $.ajax({
      method: 'POST',
      url: `http://localhost:3000/user/${email}`,
      data: {
        commuteTime: newCommuteTime,
        commuteDistance: newCommuteDistance,
        hourlyPay: newHourlyPay,
      },

      success(userData) {
        // When response comes back, switch to display page
        changePage({
          pageName: 'display',
          navbarVisible: true,
          userData
        });
      },
    });
  }
}

module.exports = ProfilePage;
