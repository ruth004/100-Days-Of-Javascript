	const prompt = require("prompt-sync")();
	while(true){
     number = Number (prompt("Enter a number: "));
     if(Number.isNaN(number)){
        console.log("Enter a valid number: ")
        
        }else if (number> 50){
            console.log("number cannot be more than 50. Try again");
            } else if(number <= 0){
}else{

	for(let index = 1; index  <= number; index ++){
	if (index % 2 == 0){
	    console.log(" # # # #")
	}else{

		console.log("# # # #")
		
		}
	    }
	    break;
	}
}
