import { TodoList } from './models';
import { action } from 'mobx';

export default class TodoStore {
  public todoList: TodoList;

  constructor() {
    this.todoList = new TodoList();
  }

  public add(task: string, isComplete: boolean = false): void {
    this.todoList.add(task, isComplete);
  }

  @action
  public toggleStatus(id: number) {
    this.todoList.toggleStatus(id);
  }
}