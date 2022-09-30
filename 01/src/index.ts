import TodoItem from "./TodoItem";

const log = console.log;

const data = [
  { id: 1, task: "장보기", complete: false },
  { id: 2, task: "공부하기", complete: true },
];

const todos: Array<object> = [];
for (const ele of data) {
  const todo = new TodoItem(ele.id, ele.task, ele.complete);
  //todo.printDetail();
  todos.push(todo);
}

for (let i = 0; i < data.length; i++) {
  let todoItem = new TodoItem(data[i].id, data[i].task, data[i].complete);
  todoItem.printDetail();
}

log("안녕하세요");
//log(todos);
