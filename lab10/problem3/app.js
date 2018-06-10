class Person {
    constructor() {
        this._firstName = "Taa";
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
}
let person = new Person();
console.log(person.firstName);
person.firstName = "Tamir";
console.log(person.firstName);
