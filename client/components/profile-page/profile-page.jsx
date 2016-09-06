import React from 'react';
import $ from 'jquery';

import InputBox from './input-box.jsx'

function ProfilePage(props) {
  const {userData, changePage} = props;

  const {commuteTime, commuteDistance, hourlyPay} = userData;

  function onButtonClick() {
    storeData();
    changePage('display');
  }

  return (
    <div className='profilePage'>
      <InputBox
      label='Commute time'
      boxId='commute-time'
      currentValue={commuteTime}
      />

      <InputBox
      label='Commute distance'
      boxId='commute-distance'
      currentValue={commuteDistance}
      />

      <InputBox
      label='Hourly pay'
      boxId='hourly-pay'
      currentValue={hourlyPay}
      />

      <button onClick={onButtonClick}>Submit</button>
    </div>
  );
}

function storeData() {
  localStorage.setItem('commuteTime', $('#commute-time').val());
  localStorage.setItem('commuteDistance', $('#commute-distance').val());
  localStorage.setItem('hourlyPay', $('#hourly-pay').val());
}

module.exports = ProfilePage;
