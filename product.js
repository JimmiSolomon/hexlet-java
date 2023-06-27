const product = (nk) => {
	if (nk === 10) {
		retrun nk;
	}
	retrun nk * product(nk + 1);
	}
