"use strict";
// return string of function
function GetName() {
    return "Hello, my name is jokosu";
}
console.log(GetName());
// return number of function
// function GetAge(): number {
// 	return 21;
// }
// console.log(GetAge());
// example for return function
function printName() {
    console.log("print name");
}
printName();
// example parameter in function
function multiply(val1, val2) {
    return val1 * val2;
}
var result = multiply(10, 3);
console.log(result);
var Add = function (val1, val2) {
    return val1 + val2;
};
// default parameter in function
var FullName = function (first, last) {
    if (last === void 0) { last = "Susilo"; }
    return first + " " + last;
};
console.log(FullName("Joko"));
// optional parameter in function
var GetUmur = function (val1, val2) {
    return val1 + " " + val2;
    // return val1 + " " + val2;
};
console.log(GetUmur(1, 133));
