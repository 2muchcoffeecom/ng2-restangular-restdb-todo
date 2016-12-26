import {Component} from '@angular/core';
import {RestService} from "./services/rest.service";
import {TodoModel} from "./models/todo.model";
import * as _ from 'lodash';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    lodash: any;
    title = 'My todo list';
    edit: boolean = false;

    public todoList;
    private _editTodo = {
        title: "",
        completed: false
    };

    constructor(
        private restService: RestService,
    ) {
        this.lodash = _;
    }

    ngOnInit() {
        this.restService.getTodoList().subscribe(res => {
            this.todoList = res;
        }, err => {
            console.log(err);
        });
    }

    addTodo() {
        let todo: TodoModel = new TodoModel(this._editTodo.title); //!
        this.restService.addTodo(todo).subscribe(
            (res) => {
                this.todoList.push(res);
            },
            (err) => {
                console.log(err)
            }
        );
        this._editTodo.title = "";
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
        this._editTodo = this.lodash.cloneDeep(todo);
    }

    saveTodo(todo) {
        todo.put().subscribe(
            (res) => {
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    saveTodoTittle() {
        this.saveTodo(this._editTodo);
        this.edit = false;
        this._editTodo = {
            title: "",
            completed: false
        };
    }
}
