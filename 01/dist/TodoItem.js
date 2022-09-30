"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("test");
var TodoItem = /** @class */ (function () {
    //   public id: number; // public private protected
    //   public task: string;
    //   public complete: boolean;
    //   constructor(id: number, task: string, complete: boolean) {
    //     this.id = id;
    //     this.task = task;
    //     this.complete = complete;
    //   }
    function TodoItem(id, task, complete) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    TodoItem.prototype.printDetail = function () {
        console.log("".concat(this.id, "\t ").concat(this.task, "\t ").concat(this.complete ? "\t (complete)" : ""));
    };
    return TodoItem;
}());
exports.default = TodoItem;
