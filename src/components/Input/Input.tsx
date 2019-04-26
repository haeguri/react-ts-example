import * as React from 'react';

interface InputProps {
  onChange?: (value: string) => void;
  value: string;
  placeholder: string;
}

const Input: React.FunctionComponent<InputProps> = (props) => {
  return (
    <input {...props} onChange={(e) => {
      props.onChange(e.currentTarget.value);
    }}/>
  )
}

export default Input;