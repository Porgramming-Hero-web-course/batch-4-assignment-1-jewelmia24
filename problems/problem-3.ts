//Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

function countWordOccurrences (sentence:string,word:string):number{
    const lowerCaseSentence = sentence.toLocaleLowerCase();
    const lowerCaseWord = word.toLocaleLowerCase();
    const arrayOfSentenceWord = lowerCaseSentence.split(" ")
    return arrayOfSentenceWord.filter(w=>w===lowerCaseWord).length

}

//console.log(countWordOccurrences("i love typescript","typeScript"));