import * as React from 'react';
import { configure } from 'mobx';
import DevTools from 'mobx-react-devtools';

import TodoList from './components/TodoList';
import TodoAddForm from './components/TodoAddForm/TodoAddForm';
import { TodoStore, Todo } from './models/TodoStore';

configure({ enforceActions: true });

const todoStore = new TodoStore();
const samples: Todo[] = [
  {
    id: "1",
    task: "회의 하기",
    isComplete: true
  },
  {
    id: "2",
    task: "메일 확인하기",
    isComplete: false
  },
  {
    id: "3",
    task: "커피 마시기",
    isComplete: true
  },
  {
    id: "4",
    task: "이슈 확인하기",
    isComplete: true
  },
  {
    id: "5",
    task: "TypeScript 공부하기",
    isComplete: true
  },
  {
    id: "6",
    task: "MobX 공부하기",
    isComplete: false
  }
];

samples.forEach(s => {
  todoStore.addTodo(s.task);
});

console.log(todoStore.todos);

export default class App extends React.Component {
  render() {
    return (
      <>
        <TodoAddForm store={ todoStore }/>
        <TodoList store={ todoStore }/>
        <DevTools />
      </>
    )
  }
}
