export class User {
	public name: string;
	constructor(name: string, public age: number) {
		this.name = name;
	}
}

let user = new User("jokosu", 27);
console.log(user);