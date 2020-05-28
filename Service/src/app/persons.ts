export class Persons {
  private name: string;
  private Age: number;

  constructor(name: string, Age: number) {
    this.name = name;
    this.Age = Age;
  }
  getDetailOfPerson(): string {
    return this.name + ' ' + this.Age;
  }
  setDetailOfPerson(name: string, Age: number): void {
    this.name = name;
    this.Age = Age;
  }
}
