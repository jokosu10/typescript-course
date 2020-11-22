// return string of function
function GetName(): string {
	return "Hello, my name is jokosu"
}
console.log(GetName());

// return number of function
// function GetAge(): number {
// 	return 21;
// }
// console.log(GetAge());

// example for return function
function printName(): void {
	console.log("print name");
}
printName();

// example parameter in function
function multiply(val1: number, val2: number): number {
	return val1 * val2;
}
const result = multiply(10, 3);
console.log(result);

// function as type
type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => {
	return val1 + val2;
}

// default parameter in function
const FullName = (first: string, last: string = "Susilo"): string => {
	return first + " " + last;
}

console.log(FullName("Joko"));

// optional parameter in function
const GetUmur = (val1: number, val2?: number): string => {
	return val1 + " " + val2;
	// return val1 + " " + val2;
}

console.log(GetUmur(1, 133));