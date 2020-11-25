"use strict";
var List = /** @class */ (function () {
    function List(elements) {
        this.data = elements;
    }
    List.prototype.add = function (element) {
        this.data.push(element);
    };
    List.prototype.addMultiple = function () {
        var _a;
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, elements);
    };
    List.prototype.getAll = function () {
        return this.data;
    };
    return List;
}());
// let numbers = new List<number>([1, 2, 3]);
// numbers.add(4);
// numbers.addMultiple(5, 6, 7);
// console.log(numbers.getAll());
var random = new List([1, 'a', 'b', 5]);
random.add("asd");
random.add(4);
random.addMultiple("asd", 123, 456);
console.log(random.getAll());
