class Shape {
	constructor (public width : number, public length : number) {

	}
}

class Rectangle extends Shape {
	constructor(width : number, length : number) {
		super(width, length);
	}

	calcSize() : number {
		return this.width * this.length;
	};
}

let rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());