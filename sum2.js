const sum2 = (znx) => {
	if (znx === 1) {
	return 1;
	} return sum2(znx-1) + znx;
}
