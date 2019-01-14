// Declare function and and parameter
function maxWord(str) {
    // declare variable and create an array of words with our split method
    let words = str.split(' ');
    // console.log(words);
    // declare variable for our biggest word. Set initial value to zero.
    let biggestWord = 0;
    let result;
    // create a for loop to iterate trough an array of words.
    for (let index = 0; index < words.length; index++) {
        // create a conditional if statement to compare current word length with previous biggest word
        if (words[index].length>biggestWord) {
            // assign new value to biggestWord
            biggestWord = words[index].length;
            // we take that word and we will keep it in variable called result
           result = words[index];
        }
    }
    console.log(result);
    return result;
}
maxWord('Web Development Tutorial');