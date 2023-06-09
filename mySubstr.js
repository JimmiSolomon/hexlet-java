const mySubstr = (text, dlina) => {
	let i = 1;
	let result = '';
	while (i <= dlina) {
		result = `${result}${text[i - 1]}`;
		i += 1;
	}return result;
};
