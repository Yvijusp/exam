import React from 'react';

const TextInputs = (props) => {
  return (
    <div className='form-group'>
      {React.Children.map(props.children, (child, index) => {
        return React.cloneElement(child, { name: props.name });
      })}
    </div>
  );
};

export default TextInputs;
