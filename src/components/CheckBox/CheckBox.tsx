import * as React from 'react';
import styled from 'styled-components';

interface CheckBoxProps {
  onClick?: () => void;
  label?: string;
  checked: boolean;
}

const WrapperLabel = styled.label`
  display: inline-block;
  position: relative;
  font-size: 16px;
  height: 0.4em;
  padding-left: 2.1876em;
  margin-bottom: 0.75em;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.5625em;
    width: 1.5625em;
    background-color: #eee;
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  input:checked ~ .checkmark {
    background-color: #2196F3;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

const CheckBox: React.FunctionComponent<CheckBoxProps> = (props) => {
  const id = String((new Date()).getTime());

  return (
    <WrapperLabel htmlFor={id}>{props.label}
      <input 
        type="checkbox" 
        id={id} 
        defaultChecked={props.checked} 
        onClick={props.onClick} />
      <span className="checkmark"></span>
    </WrapperLabel>
  )
}

export default CheckBox;