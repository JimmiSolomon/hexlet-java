const prostNumber = (nump) => {
	if(nump < 2) {
		return false;
		}
		let divider = 2;
		while (divider <= nump / 2) {
			if (nump % divider === 0) {
				return false;
			}
			divider += 1;
		}return true;
};