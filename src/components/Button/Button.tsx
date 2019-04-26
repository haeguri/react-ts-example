import * as React from 'react';

interface ButtonProps {
  onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return (
    <button {...props} onClick={(e) => { props.onClick(e); e.preventDefault(); }}>{props.children}></button>
  );
}

export default Button;