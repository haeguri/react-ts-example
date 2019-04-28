import * as React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  className: string;
  onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  children: string;
}

const StyledButton = styled.button`
  font-size: 16px;
  padding: 0.3em 0.5em;
  color: #fff;
  outline: none;
  border: solid 1px #339af0;
  background: #339af0;
  border-radius: 3px;

  &:active {
    border: solid 1px #1864ab;
    background: #1864ab;
  }
`

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return (   
    <StyledButton 
      {...props} 
      onClick={(e) => { props.onClick(e); e.preventDefault(); }}
    >
      {props.children}
    </StyledButton>
  );
}

export default Button;