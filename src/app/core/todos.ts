import {Injectable} from "@angular/core";

import {Todo} from "./todo";
import {RestService} from "../services/rest.service";

@Injectable()
export class TodoStore {
    todos: Array<Todo>;

    constructor(private restService: RestService) {
        let persistedTodos = this.restService.getTodoList().subscribe();
        this.todos = persistedTodos.map((todo: {_title: string, completed: boolean }) => {
            let ret = new Todo(todo._title);
            ret.completed = todo.completed;
            return ret;
        });
    }

    allCompleted(): boolean {
        return this.todos.length === this.getCompleted().length;
    }

    setAllTo(completed: boolean): void {
        this.todos.forEach((t: Todo) => t.completed = completed);
        this._updateStore();
    }

    removeCompleted(): void {
        this.todos = this._getWithCompleted(false);
        this._updateStore();
    }

    getRemaining() {
        return this._getWithCompleted(false);
    }

    getCompleted() {
        return this._getWithCompleted(true);
    }

    toggleCompletion(todo: Todo): void {
        todo.completed = !todo.completed;
        this._updateStore();
    }

    remove(todo: Todo): void {
        this.todos.splice(this.todos.indexOf(todo), 1);
        this._updateStore();
    }

    add(title: string): void {
        this.todos.push(new Todo(title));
        this._updateStore();
    }

    private _updateStore(): void {
        localStorage.setItem('angular2-todo-webpack', JSON.stringify(this.todos));
    }

    private _getWithCompleted(completed: boolean) {
        return this.todos.filter((todo: Todo) => todo.completed === completed);
    }

}