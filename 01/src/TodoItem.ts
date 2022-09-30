console.log("test");
class TodoItem {
  //   public id: number; // public private protected
  //   public task: string;
  //   public complete: boolean;

  //   constructor(id: number, task: string, complete: boolean) {
  //     this.id = id;
  //     this.task = task;
  //     this.complete = complete;
  //   }

  constructor(
    public id: number,
    public task: string,
    public complete: boolean
  ) {
    this.id = id;
    this.task = task;
    this.complete = complete;
  }

  printDetail(): void {
    console.log(
      `${this.id}\t ${this.task}\t ${this.complete ? "\t (complete)" : ""}`
    );
  }
}

export default TodoItem;
