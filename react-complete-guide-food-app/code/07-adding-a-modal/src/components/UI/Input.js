import classes from './Input.module.css';
import React from 'react';

// this component is a wrapper for the input element
// it requires a forwardRef

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
