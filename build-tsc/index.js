"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StaticZipCodeValidator_1 = require("./StaticZipCodeValidator");
const Message_1 = require("./Message");
let strings = ["Hello", "98052", "101"];
// Use function validate
strings.forEach(s => {
    console.log(`"${s}" ${StaticZipCodeValidator_1.default(s) ? " matches" : " does not match"}`);
});
let mynumber = 200;
Message_1.showMessage('ajay');
exports.num = mynumber;
// console.log('HelloWorld')
