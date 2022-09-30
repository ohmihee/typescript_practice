const log = console.log;

class TodoItem {
  constructor(id, task, complete) {
    this.id = id;
    this.task = task;
    this.complete = complete;
  }

  printDetails() {
    //console.log(`${this.id}/n ${this.task} /n ${this.complete}`);
    console.log(
      `${this.id}\t ${this.task}\t ${this.complete ? "\t (complete)" : ""}`
    );
  }
}
// const test = new TodoItem("1", "a");
// test.printDetails();

const data = [
  { id: 1, task: "장보기", complete: false },
  { id: 2, task: "공부하기", complete: true },
];

let todoItem = new TodoItem(data[0].id, data[0].task, data[0].complete);
//console.log(todoItem);

const iterData = data[Symbol.iterator]();
// log(iterData);
// log(iterData.next());
// log(iterData.next());
// log(iterData.next());

//console.log(iterData.next().done);
let todos = [];

for (ele of data) {
  const todo = new TodoItem(ele.id, ele.task, ele.complete);
  todos.push(todo);
  todo.printDetails();
}

// log(todos);
