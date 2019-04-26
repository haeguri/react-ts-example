export class Todo {
  public id?: number;

  public task: string;

  public isComplete: boolean;

  constructor(id: number, task: string, isComplete: boolean) {
    this.id = id;
    this.task = task;
    this.isComplete = isComplete;
  }
}