import { Todo } from "./Todo";
import { observable } from "mobx";

export class TodoList {
  @observable
  items: Todo[] = [];

  public add(task: string) {
    const nextId = this.getNextTodoId();

    this.items.push(new Todo(nextId, task, false));
  }

  private getNextTodoId() {
    const lastTodo = this.items[this.items.length-1];

    return lastTodo ? lastTodo.id + 1 : 1;
  }
}