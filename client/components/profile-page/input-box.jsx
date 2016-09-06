import React from 'react';

function InputBox(props) {
  return (
    <div className='input-box'>
      <p>{props.label}</p>
      <input type='text' id={props.boxId} />
    </div>
  );
}

module.exports = InputBox;
