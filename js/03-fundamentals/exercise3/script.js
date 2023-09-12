function capitalize(word) {
    const firstLetter = word.charAt(0);
    const remainingLetters = word.substring(1);
    const firstLetterCap = firstLetter.toUpperCase();
    const final = firstLetterCap + remainingLetters;
    return final;
}

console.log(capitalize('hello, this is a test'));