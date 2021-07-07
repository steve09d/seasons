import React from 'react';

const Spinner = ({ text }) => {
  return (
    <div className='ui active dimmer'>
      <div className='ui big text loader'>{text}</div>
    </div>
  );
};

Spinner.defaultProps = {
  text: 'Loading...',
};

export default Spinner;
