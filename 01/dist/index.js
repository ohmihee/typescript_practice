"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TodoItem_1 = __importDefault(require("./TodoItem"));
var log = console.log;
var data = [
    { id: 1, task: "장보기", complete: false },
    { id: 2, task: "공부하기", complete: true },
];
var todos = [];
for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var ele = data_1[_i];
    var todo = new TodoItem_1.default(ele.id, ele.task, ele.complete);
    //todo.printDetail();
    todos.push(todo);
}
for (var i = 0; i < data.length; i++) {
    var todoItem = new TodoItem_1.default(data[i].id, data[i].task, data[i].complete);
    todoItem.printDetail();
}
log("안녕하세요");
//log(todos);
