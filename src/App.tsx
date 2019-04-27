import * as React from 'react';
import { configure, toJS } from 'mobx';
import DevTools from 'mobx-react-devtools';

import TodoList from './components/TodoList';
import TodoAddForm from './components/TodoAddForm/TodoAddForm';
import { Todo } from './models';
import TodoStore from './TodoStore';

configure({ enforceActions: "observed" });

const todoStore = new TodoStore();
const samples: Todo[] = [
  {
    id: 1,
    task: "회의 하기",
    isComplete: true
  },
  {
    id: 2,
    task: "메일 확인하기",
    isComplete: false
  },
  {
    id: 3,
    task: "커피 마시기",
    isComplete: true
  },
  {
    id: 4,
    task: "이슈 확인하기",
    isComplete: true
  },
  {
    id: 5,
    task: "TypeScript 공부하기",
    isComplete: true
  },
  {
    id: 6,
    task: "MobX 공부하기",
    isComplete: false
  }
];

samples.forEach(s => {
  todoStore.add(s.task, s.isComplete);
});

// console.log('init todo', toJS(todoStore.todoList));

// setInterval(() => {
//   console.log('curr todo', toJS(todoStore.todoList).items.reduce((prev: number, curr: Todo) => {
//     return prev + (curr.isComplete ? 1 : 0);
//   }, 0));
// }, 1000);

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
