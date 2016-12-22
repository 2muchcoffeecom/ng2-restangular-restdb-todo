import {Injectable} from '@angular/core'
import {Restangular} from "ng2-restangular";
import {Todo} from "../core/todo";

@Injectable()
export class RestService {

    constructor(private restangular: Restangular) {}

    //methods
    getTodoList() {
        let list = this.restangular.one("list");
        return list.get();
    }

    addTodo(todo: Todo) {
        return this.restangular.all("list").post(todo);
    }

    removeTodo(todo) {
        return todo.remove();
    }
}