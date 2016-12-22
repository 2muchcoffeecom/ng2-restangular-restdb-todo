export class Todo {
    completed: boolean;
    /*private*/ _title: string;
    //
    // get title(): string {
    //     return this._title;
    // }
    // set title(value: string) {
    //     this._title = value;
    // }

    constructor(title: string) {
        this.completed = false;
        this._title = title;
    }
}

