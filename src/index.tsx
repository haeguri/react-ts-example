import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

import App from './App';

const StyledApp = styled(App)`
  * {
    box-sizing: border-box;
  }
`;

ReactDOM.render(
    <StyledApp />,
    document.getElementById("example")
);