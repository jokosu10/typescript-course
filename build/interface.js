"use strict";
var Asus = /** @class */ (function () {
    function Asus(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    Asus.prototype.on = function () {
        console.log("menyala");
    };
    Asus.prototype.off = function () {
        console.log("mati");
    };
    return Asus;
}());
var MacBook = /** @class */ (function () {
    function MacBook(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    MacBook.prototype.on = function () {
        console.log("menyala");
    };
    MacBook.prototype.off = function () {
        console.log("mati");
    };
    return MacBook;
}());
var asus = new Asus("Asus", true);
asus.on();
asus.off();
var mb = new MacBook("Ini MacBook", true);
mb.on();
mb.off();
