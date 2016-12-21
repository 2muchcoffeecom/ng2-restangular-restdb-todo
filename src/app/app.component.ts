import {Component} from '@angular/core';
import {RestService} from "./services/rest.service";
import {Note} from "./note";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'My todo list';
    database;
    constructor(private restService: RestService) {
    }
    ngOnInit() {
        this.restService.getTodoList().subscribe(res => {
            this.database = res;
        }, err => {
            console.log(err);
        });
    }
    test: Note = {
        idnum: 10,
        title: 'new string'
    };


}
