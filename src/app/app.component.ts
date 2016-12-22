import {Component} from '@angular/core';
import {RestService} from "./services/rest.service";
import {Todo} from "./core/todo";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    todoTitle: string;
    title = 'My todo list';
    database: Todo[];
    edit: boolean = false;

    constructor(private restService: RestService) {
    }

    ngOnInit() {
        this.restService.getTodoList().subscribe(res => {
            this.database = res;
            //debugger;
        }, err => {
            console.log(err);
        });
    }

    addTodo() {
        let todo: Todo = new Todo(this.todoTitle);
        this.restService.addTodo(todo).subscribe(
            (res) => {
                this.database.push(todo);
            },
            (err) => {
                console.log(err)
            }
        );
    }

    removeTodo(todo): void {
        console.log('click Delete');
        this.restService.removeTodo(todo);
    }

    editTodo(todo: Todo): void {
        this.edit = true;
        this.todoTitle = todo._title;
        //debugger;
        console.log('click Edit');
    }

    saveTodo(todo: Todo) {
        this.restService.saveTodo(todo).subscribe(
            (res) => {

            },
            (err) => {
                console.log(err);
            }
        );
    }
}
