"use strict";
// numeric enum
// enum Month {
// 	JAN = 0,
// 	FEB,
// 	MAR,
// 	APR,
// 	MAY
// };
// console.log(Month);
var Month;
(function (Month) {
    Month["JAN"] = "January";
    Month["FEB"] = "Februari";
    Month["MAR"] = "Maret";
    Month["APR"] = "April";
    Month["MAY"] = "Mei";
})(Month || (Month = {}));
;
console.log(Month.MAY);
