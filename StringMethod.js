/*
 * startWith(searchString, position) -> check a string start with anothetr string
 * endWith(searchString, length) -> check a string ends with anothetr string
 * includes(searchString, position) -> check if a string contain anothetr string
 * all these methods are case sensitive and return true or false
 */

const message = "Today is friday";

console.log(message.startsWith("Today"));
console.log(message.endsWith("friday"));
console.log(message.includes("is"));
