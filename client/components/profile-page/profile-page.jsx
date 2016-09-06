import React from 'react';
import $ from 'jquery';

import InputBox from './input-box.jsx'

function ProfilePage() {
  return (
    <div className='profilePage'>
      <InputBox label='Commute time' boxId='commute-time'/>
      <InputBox label='Commute distance' boxId='commute-distance'/>
      <InputBox label='Hourly pay' boxId='hourly-pay'/>
      <button onClick={storeData} >Submit</button>
    </div>
  );
}

function storeData() {
  localStorage.setItem('commuteTime', $('#commute-time').val());
  localStorage.setItem('commuteDistance', $('#commute-distance').val());
  localStorage.setItem('hourlyPay', $('#hourly-pay').val());
}

module.exports = ProfilePage;
