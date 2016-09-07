import React from 'react';

function InputBox(props) {
  let {type, label, boxId, currentValue} = props;

  type = type || 'text';

  return (
    <div className='input-box'>
      <p>{label}</p>
      <input type={type} id={boxId} defaultValue={currentValue || ''} />
    </div>
  );
}

module.exports = InputBox;
