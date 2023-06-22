const sequenceSum = (begin, end) => {
	if (begin === end){
		return begin;
	}else if (begin > end){
		return NaN;
	}else {
		return begin + sequenceSum(begin + 1, end);
	}
};
