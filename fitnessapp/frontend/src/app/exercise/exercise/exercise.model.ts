export class Exercise{
    private _id: string = '';
    private _name: string;
    private _difficulty: number;

    static fromJSON(json): Exercise {
        const rec = new Exercise(json.name, json.difficulty);
        rec._id = json._id;
        return rec;
    }

    constructor(
        name: string,
        difficulty: number = 1
    ) {
        this._name = name;
        this._difficulty = difficulty;
    }

    get id(): string {
        return this._id;
    }
      
    get name(): string {
        return this._name;
    }
      
    set name(name: string) {
        this._name = name;
    }

    get difficulty(): number {
        return this._difficulty;
    }

    toJSON() {
        return {
          _id: this._id,
          name: this._name,
          difficulty: this._difficulty
        };
      }
}