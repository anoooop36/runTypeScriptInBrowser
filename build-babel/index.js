"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StaticZipCodeValidator_1 = require("./StaticZipCodeValidator");
var Message_1 = require("./Message");
var strings = ["Hello", "98052", "101"];
// Use function validate
strings.forEach(function (s) {
    console.log("\"" + s + "\" " + (StaticZipCodeValidator_1.default(s) ? " matches" : " does not match"));
});
var mynumber = 200;
Message_1.showMessage('ajay');
exports.num = mynumber;
// console.log('HelloWorld')
//# sourceMappingURL=index.js.map