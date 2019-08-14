export class Task {
    public name: string;
    public state: number;
    public description: string;
    public ID: number;

    constructor(name: string, state: number, description: string, ID: number) {
        this.name = name;
        this.state = state;
        this.description = description;
        this.ID=ID;
    }
}