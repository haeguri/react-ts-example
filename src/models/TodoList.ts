import { Todo } from "./Todo";
import { observable } from "mobx";

export class TodoList {
  @observable
  items: Todo[] = [];

  public add(task: string, isComplete: boolean = false) {
    const nextId = this.getNextTodoId();

    this.items.push(new Todo(nextId, task, isComplete));
  }

  public toggleStatus(id: number) {
    const todo: Todo = this.items.find((todo: Todo) => todo.id === id);

    todo.isComplete = !todo.isComplete;
  }

  private getNextTodoId() {
    const lastTodo = this.items[this.items.length-1];

    return lastTodo ? lastTodo.id + 1 : 1;
  }
}