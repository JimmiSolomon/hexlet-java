const getTypeOfSentence = (sentence) => {
    const lastChar = sentence[sentence.length - 1];
    let sentenceType;

    if (lastChar === '?') {
        sentenceType = 'question';
    } else if (lastChar === '!') {
        sentenceType = 'exclamation';
    } else {
        sentenceType = 'normal';
    }
    return  `sentence is ${sentenceType}`;
};
