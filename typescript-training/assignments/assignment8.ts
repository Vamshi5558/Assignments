function findOccurences(paragraph: string, word: string): number[] {
    const indexes: number[] = [];
    let position = paragraph.indexOf(word);

    while (position !== -1) {
        indexes.push(position);
        position = paragraph.indexOf(word, position + word.length)
    }

    return indexes;
}

const text = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
const indexes = findOccurences(text, "Java");
console.log(`Total Occurrences: ${indexes.length}`);
console.log(`Indexes: ${indexes.join(", ")}`);