import * as React from 'react';
import styled from 'styled-components';
import 'open-color';

interface InputProps {
  onChange?: (value: string) => void;
  value: string;
  placeholder: string;
}

const StyledInput = styled.input`
  font-size: 16px;
  outline: 0;
  padding: 0.3em 0.5em;
  border-radius: 3px;
  border: solid 1px #dee2e6;

  &:focus {
    border: solid 1px #1971c2;
  }
`;

const Input: React.FunctionComponent<InputProps> = (props) => {
  return (
    <StyledInput {...props} onChange={(e) => {
      props.onChange(e.currentTarget.value);
    }}/>
  )
}

export default Input;