export class TodoModel {
    completed: boolean;
    title: string;

    constructor(title: string) {
        this.completed = false;
        this.title = title;
    }
}

