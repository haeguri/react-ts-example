import { TodoList } from './models';
import { observable } from 'mobx';

export default class TodoStore {
  public todoList: TodoList;

  constructor() {
    this.todoList = new TodoList();
  }

  public add(task: string): void {
    this.todoList.add(task);
  }
}