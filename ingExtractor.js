const ingExtractor = (phrase) => {
    const phraseList = phrase.split(' ')
    const result = []
    for (let i=0; i < length(phraseList); i++) {
        if (phraseList[i].substring(-3, 0) === 'ing' && length(phraseList[i]) > 4){
            result.append(phraseList[i])
        }
    }
}