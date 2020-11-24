export class User {
	name: string;

	constructor(name: string, public age: number) {
		this.name = name;
	}

	setName(value: string): void {
		this.name = name;
	}

	getName = (): string => {
		return this.name;
	}
}

class Admin extends User {
	read: boolean = true;
	write: boolean = true;
	phone: string;

	constructor(phone: string, name: string, age: number) {
		super(name, age);
		this.phone = phone;
	}

	getRole(): { read: boolean, write: boolean } {
		return {
			read: this.read,
			write: this.write
		};
	};
}

let AdminUser = new Admin("083854144912", "jokosu", 27);
AdminUser.getName();
AdminUser.getRole();
AdminUser.setName("jokosu");
AdminUser.phone;