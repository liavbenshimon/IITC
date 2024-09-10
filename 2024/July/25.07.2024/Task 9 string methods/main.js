//STRINGS
//1.
function str(someStr) {
    return someStr.length;
};
console.log(str("liav"));
//2.
function convertString(srtCO) {
    return srtCO.toUpperCase();
};
console.log(convertString("liav"));
//3.
function convertStringing(srtCOpo) {
    return srtCOpo.toLowerCase();
};
console.log(convertStringing("MOMO"));
//4.
function spec(charc) {
    return charc.charAt(2);
};
console.log(spec("north"));
//5.
function substring(newstr) {
    return newstr.substring(5);
};
console.log(substring("Hello World"));
//6.
function myReplace(str,search,replace){
return str.replace(search,replace);
};
console.log(myReplace("hello world","hello","hey"));
//7.
function removeWhiteSpace(store) {
    return store.trim();
};
console.log(removeWhiteSpace("               what is the day today"));
//8.
function checkString(dobuleCheck,one) {
    return dobuleCheck.startsWith(one);
};
console.log(checkString("hello, world","hello"));
//9.
function endCheck(firstStr,secondStr) {
    return firstStr.endsWith(secondStr);
};
console.log(endCheck(`once upon`, `a time`));
console.log(endCheck(`once upon`, `upon`));
//10.
function searchValue(firstValue,secValue) {
  return firstValue.indexOf(secValue);  
};
console.log(searchValue("Welcome to miami" , "miami"));
//11.
function splitStr(str,value) {
    return str.split(value);    
};
console.log(splitStr("hello world"," "));
//12.
function repeatFun (str) {
     return str.repeat(2)
};
console.log(repeatFun("hello"));
//13.
function concatenates(firstStr,secondStr) {
    return firstStr.concat(secondStr);
};
console.log(concatenates("nice"+ " " ,"ice"));
//14.
function padsFun(string,start,char) {
return string.padStart(start,char)
};
console.log(padsFun("Hello",10,"x"));
//15.
function extracts_Charachters(string) {
    return string.slice(0,4);
};
console.log(extracts_Charachters("what are u doing?"));
//16.
function replaceFunction(string) {
    return string.replace("morning","night");
};
console.log(replaceFunction("good morning"));
//17.
function checkString(string) {
    return string.includes("hello")
};
console.log(checkString("good morning betiful world, hello there"));
//18.
function lastCharachter(string) {
    return string[string.length-1];
};
console.log(lastCharachter("hello"));
//19.
function isStringEmpty(str) {
    if (0===str.length) {
        return true
    } return false
};
console.log(isStringEmpty("hello"));
//20.
function portionOfString(str) {
  return str.slice(4);  
};
console.log(portionOfString("good morning world"));







