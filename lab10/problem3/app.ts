class Person {
	private _firstName : string = "Taa";
	
	get firstName() : string {
		return this._firstName;
	}

	set firstName(value : string) {
		this._firstName = value;
	}
}

let person = new Person();
console.log(person.firstName);
person.firstName = "Tamir"; 	
console.log(person.firstName);