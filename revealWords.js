function solve(words, str) {

    words = words.split(', ');

    for (const word of words) {
        let myStr = '*'.repeat(word.length);
        str = str.replace(myStr, word);
    }
    console.log(str);


}
solve('great, learning',
'softuni is ***** place for ******** new programming languages');