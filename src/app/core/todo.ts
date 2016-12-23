export class Todo {
    completed: boolean;
    title: string;
    //
    // get title(): string {
    //     return this.title;
    // }
    // set title(value: string) {
    //     this.title = value;
    // }

    constructor(title: string) {
        this.completed = false;
        this.title = title;
    }
}

