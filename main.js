function countVowels(string) {
    let vowels = "eoiauEOIAU";
    let count = 0;
    
    for (let i = 0; i < string.length; i++) {
            for (let j = 0; j < vowels.length; j++) {
            if (string[i] === vowels[i]) {
                count ++
            }
        }
    } 
    console.log(count)
}
countVowels("liav");