import validate from "./StaticZipCodeValidator";
import {showMessage} from "./Message"
let strings = ["Hello", "98052", "101"];

// Use function validate
strings.forEach(s => {
  console.log(`"${s}" ${validate(s) ? " matches" : " does not match"}`);
  
});

let mynumber = 200;
showMessage('ajay')

export var num = mynumber
// console.log('HelloWorld')