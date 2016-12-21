import {Injectable} from '@angular/core'
import {Restangular} from "ng2-restangular";

@Injectable()
export class RestService {

    constructor(private restangular: Restangular) {}

    //methods
    getTodoList() {
        let list = this.restangular.one("list");
        return list.get();
    }
    postTodo(node: Node) {
        let list = this.restangular.one("list");
        return list.post(list, JSON.stringify(node));
    }
}