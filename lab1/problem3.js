const item = {
	"name": "Biscuits",
	"type": "regular",
	"category": "food",
	"price": 2.0
}

var applyCoupon = x => y => z => {
	if(x == z.category){
		z.price *= 1 - y; 
		console.log(z.price);
	}
	return z;
}

applyCoupon("food")(0.1)(item).price === 1.8