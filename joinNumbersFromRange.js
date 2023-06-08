const joinNumbersFromRange = (num1, num2) => {
	let i = num1;
	let result = '';
	while (i <= num2){
		result = `${result}${i}`;
		i += 1;
	}return result;
};
