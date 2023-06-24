const node = (num) => {
	const iter = (devider = 2) => {
	if (devider * devider > num) {
	return num;
	}
	if (num % devider) {
	return iter(devider + 1);
	}
	return devider;
	}
	return iter();
	};

console.log(node(17));
