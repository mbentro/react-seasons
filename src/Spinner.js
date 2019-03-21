import React from 'react';

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// Set default values is a new component is created without passing a message prop
Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;
