const fac = (ch) => {
	const int = (coun, accum) => {
	if (count === 1) {
		return accum;
	}
		return int(coun - 1, coun * accum);
	}
		return int(ch, 1);
	}
