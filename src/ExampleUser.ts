export class User {
	name: string;

	constructor(name: string, public age: number) {
		this.name = name;
	}

	setName(value: string) {
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
	private _email: string = "";
	static getRoleName: string = "Admin";

	constructor(phone: string, name: string, age: number) {
		super(name, age);
		this.phone = phone;
	}

	static getNameRole() {
		return "Hey";
	}

	getRole(): { read: boolean, write: boolean } {
		return {
			read: this.read,
			write: this.write
		};
	};

	set email(value: string) {
		if (value.length < 5) {
			this._email = "Email is wrong";
		} else {
			this._email = value;
		}
	}

	get email(): string {
		return this._email;
	}
}

// let AdminUser = new Admin("083842423432", "jokosu10", 27);
// AdminUser.getRole();
// AdminUser.phone;

// AdminUser.email = "a@jokosu10.my.id";
// console.log(AdminUser.email)
// console.log(AdminUser.phone);

let adminRoleName = Admin.getRoleName;
let adminNameRole = Admin.getNameRole()
console.log(adminRoleName);
console.log(adminNameRole);
