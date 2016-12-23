import {Component} from '@angular/core';
import {RestService} from "./services/rest.service";
import {TodoModel} from "./models/todo.model";
import * as _ from 'lodash';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    title = 'My todo list';
    todoTitle: string;
    edit: boolean = false;

    public todoList;
    private _editTodo;

    constructor(
        private restService: RestService,
    ) {
    }

    ngOnInit() {
        this.restService.getTodoList().subscribe(res => {
            this.todoList = res;
        }, err => {
            console.log(err);
        });
    }

    addTodo() {
        let todo: TodoModel = new TodoModel(this.todoTitle); //!
        this.restService.addTodo(todo).subscribe(
            (res) => {
                this.todoList.push(res);
            },
            (err) => {
                console.log(err)
            }
        );
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
        this.todoTitle = todo.title;
    }

    saveTodo(_editTodo) {
        //this._editTodo.title = this.todoTitle;
        //debugger;
        _editTodo.save().subscribe(
            (res) => {
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        );
        //this.edit = false;
        //this._editTodo = null;
        //debugger;
    }
    saveTodoTitile() {
        this._editTodo.title = this.todoTitle;
        this.saveTodo(this._editTodo);
        this.edit = false;
        this._editTodo = null;
        this.todoTitle = "";
    }
}
