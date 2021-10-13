const ingExtractor = (phrase) => {
    const phraseList = phrase.split(' ')
    const result = []
    for (let i=0; i < phraseList.length; i++) {
        if (phraseList[i].substr(-3) === 'ing' && phraseList[i].length > 4){
            result.push(phraseList[i])
        }
    }
    return(result)
}

let phrase = process.argv.slice(2).join(' ')
console.log(ingExtractor(phrase))