Array.prototype.isDual = function(){
	if(this.length == 0){
		return true;
	}

	if(this.length%2 == 1){
		return false;
	}

	var sum = this[0] + this[1];
	for(var i=0; i*2+1 < this.length-1; i+2){
		if(this[i*2] + this[i*2 + 1] != sum){
			return false;
		}
	}
	
	return true;
}

console.log([1,2,3,0].isDual());