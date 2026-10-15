let number = [2,7,8,5];
	let target = 9;
	for( let index = 0; index <= number.length; number++){
		for( let count = index +1; count <= number.length; count ++){
		if(number[count] + number[index]== 9){
		console.log([count,index]);
	}
	}
	}

