const fibonacci = (max) => {
	
	let FNums = [0, 1];
	
	while (FNums[FNums.length - 1] + FNums[FNums.length - 2] <= max) {
		FNums.push(FNums[FNums.length - 1] + FNums[FNums.length - 2]);
	}

	return FNums;
}

console.log(fibonacci(100));