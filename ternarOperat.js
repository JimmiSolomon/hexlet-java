const abs = (number) => (number >= 0 ? number : -number);

const getTypeOfSentence = (sentence) => {
	const lastChar = sentence.slice(-1);

	return (lastChar === '?') ? 'question' : 'normal';
};

