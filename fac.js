const fac = (ch) => {
	const int = (count, accum) =>
	if (count === 1) {
	return accum;
	}
	return int(count - 1, count * accum);
	}
	return int(ch, 1);
}

