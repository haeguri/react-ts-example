import * as React from 'react';
import styled from 'styled-components';
import { Task } from '../../models';

const Wrapper = styled.div`
    color: red;
`;

export interface TodoItemProps {
    key: string;
    isComplete: boolean;
    content: string;
};

export default class TodoItem extends React.Component{
    render() {
        const { isComplete, content } = this.props;

        return (
            <Wrapper>Todo Item 2</Wrapper>
        )
    }
}