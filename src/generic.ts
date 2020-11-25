function getData(value: any) {
	return value;
}

console.log(getData("jokosu10").length);
console.log(getData(17).length);

function myData<T>(value: T) {
	return value;
}

console.log(myData("jokosu10").length);
console.log(myData(17));

// how to write generic function with jsx
const arrowFunc = <T,>(value: T) => {

}
