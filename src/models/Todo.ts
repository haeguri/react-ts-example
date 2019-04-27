import { observable } from "mobx";

export class Todo {
  public id?: number;

  public task: string;

  @observable
  public isComplete: boolean;

  constructor(id: number, task: string, isComplete: boolean = false) {
    this.id = id;
    this.task = task;
    this.isComplete = isComplete;
  }
}