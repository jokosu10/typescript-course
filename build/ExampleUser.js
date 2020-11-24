"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, age) {
        var _this = this;
        this.age = age;
        this.getName = function () {
            return _this.name;
        };
        this.name = name;
    }
    User.prototype.setName = function (value) {
        this.name = name;
    };
    return User;
}());
exports.User = User;
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(phone, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.read = true;
        _this.write = true;
        _this._email = "";
        _this.phone = phone;
        return _this;
    }
    Admin.getNameRole = function () {
        return "Hey";
    };
    Admin.prototype.getRole = function () {
        return {
            read: this.read,
            write: this.write
        };
    };
    ;
    Object.defineProperty(Admin.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            if (value.length < 5) {
                this._email = "Email is wrong";
            }
            else {
                this._email = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Admin.getRoleName = "Admin";
    return Admin;
}(User));
// let AdminUser = new Admin("083842423432", "jokosu10", 27);
// AdminUser.getRole();
// AdminUser.phone;
// AdminUser.email = "a@jokosu10.my.id";
// console.log(AdminUser.email)
// console.log(AdminUser.phone);
var adminRoleName = Admin.getRoleName;
var adminNameRole = Admin.getNameRole();
console.log(adminRoleName);
console.log(adminNameRole);
