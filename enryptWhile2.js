const encryptWhile = (str) => {
	let result = '';
	let i = 0;
	while (i <  str.length){
		const curi = str[i + 1] || '';
		result = `${result}${curi}${str[i]}`;
		i += 2;
	}
	return result;
};
