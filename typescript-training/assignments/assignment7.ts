//Count total number of words in a sentence
function countWords(sentence: string): number{
    const words = sentence.trim().split(/\s+/);
    return words.length;
}
//Count total number of letters in a sentence
function countLetters(sentence: string): number{
    const letters = sentence.replace(/[^a-zA-Z]/g, "");
    return letters.length;
}
//Reversing a sentence
function reverseSentence(sentence: string): string{
    return sentence.split("").reverse().join("");
}
//Reversing a sentence word by word
function reverseWordByWord(sentence: string): string{
    return sentence.split(" ").reverse().join(" ");
}
//Reversing letters of a word in a sentence
function reverseEachWord(sentence: string): string{
    return sentence.split(" ").map(word=>word.split("").reverse().join("")).join(" ");
}
//Converting the first character to upper case
function capitalizeWords(sentence: string): string{
    return sentence.split(" ").map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
//converting all characters in a sentence to upper case
function capitalizeAllWords(sentence: string): string{
    return sentence.split(" ").map(word=>word.toUpperCase()).join(" ");
}

const sentence = "Java programming is fun and challenging";
console.log(`Total number of words: ${countWords(sentence)} `);
console.log(`Total number of letters: ${countLetters(sentence)}`);
console.log(reverseSentence(sentence));
console.log(reverseWordByWord(sentence));
console.log(reverseEachWord(sentence));
console.log(capitalizeWords(sentence));
console.log(capitalizeAllWords(sentence));