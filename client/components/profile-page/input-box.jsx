import React from 'react';

function InputBox(props) {
  const {label, boxId, currentValue} = props;

  return (
    <div className='input-box'>
      <p>{label}</p>
      <input type='text' id={boxId} defaultValue={currentValue || ''} />
    </div>
  );
}

module.exports = InputBox;
