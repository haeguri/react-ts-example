import { observable } from 'mobx';

export interface Todo {
  id?: string;
  task: string;
  isComplete: boolean;
}

export class TodoStore {
  @observable todos: Todo[] = [];
  
  public addTodo(task: string): void {
    const prevTodo: Todo = this.todos[this.todos.length-1];
    let todoId: string = '1';

    if (prevTodo) {
      todoId = String(Number(prevTodo.id) + 1);
    }

    this.todos.push({
      id: todoId,
      isComplete: false,
      task
    });
  }
}