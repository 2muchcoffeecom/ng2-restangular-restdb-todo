import {Component} from '@angular/core';
import {RestService} from "./services/rest.service";
import {TodoModel} from "./models/todo.model";
import {TITLE} from "./share/const"
import * as _ from 'lodash';
import {Subject} from "rxjs";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = TITLE;
    inputText: string;
    edit: boolean = false;
    public todoList;
    private _editTodo;
    private changeStatus$ = new Subject();
    constructor(private restService: RestService,) {
    }
    ngOnInit() {
        this.restService.getTodoList().subscribe(
            (res) => {
                this.todoList = res;
            },
            (err) => {
                console.log(err);
            });
        this.changeStatus$.debounceTime(1500)
            .subscribe(todo => {
                this.saveTodo(todo);
            })
    }
    addTodo() {
        let todo: TodoModel = new TodoModel(this.inputText); //!
        this.restService.addTodo(todo).subscribe(
            (res) => {
                this.todoList.push(res);
            },
            (err) => {
                console.log(err)
            }
        );
        this.inputText = "";
    }
    removeTodo(todo): void {
        this.restService.removeTodo(todo).subscribe(
            (res) => {
                _.remove(this.todoList, {_id: res.result[0]});
            },
            (err) => {
                console.log(err)
            }
        );
    }
    editTodo(todo): void {
        this.edit = true;
        this._editTodo = todo;
        this.inputText = todo.title;
    }
    saveTodo(editTodo) {
        editTodo.put().subscribe(
            (res) => {
            },
            (err) => {
                console.log(err);
            }
        );
    }
    changeCompleted(todo) {
        this.changeStatus$.next(todo);
    }
    saveTodoTittle() {
        this._editTodo.title = this.inputText;
        this.saveTodo(this._editTodo);
        this.edit = false;
        this._editTodo = null;
        this.inputText = "";
    }
}