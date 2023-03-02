//some basic concepts of TSC
console.log("My first TypeScript code");
//Variable & object declaration
var testnum = 10;
console.log(typeof (testnum));
console.log("Value of numbere here -->" + testnum);
//string
var testString = "training";
console.log(typeof (testString));
console.log("Value of String here -->" + testString);
//Boolean
var testBoolean = false;
console.log(typeof (testBoolean));
console.log("Value of Boolean here -->" + testBoolean);
//one more super data type in typescript used in development
//any
var testAny = "Hellloooowwww";
console.log(typeof (testAny));
console.log("Value of Any here -->" + testAny);
//now declare the Array in Typescript
var myArray = ["Al", "Rahima", "Lari"];
console.log(typeof (myArray));
console.log("Value of Array here -->" + myArray);
//now declare the Array of Any in Typescript
var myAnyArray = ["Al", "Rahima", "Lari", "age", "is", 22];
console.log(typeof (myAnyArray));
console.log("Value of Any Array here -->" + myAnyArray);
//Type of function or method in TS code
//Normal method with return type
function addNums(num1, num2) {
    console.log("Here is the addition method with return type");
    return num1 + num2;
}
//call the function here
console.log(addNums(10, 5));
//Function with optional parameter represent by ?
function details(id, name, mailid) {
    console.log("ID :- " + id);
    console.log(" Name :- " + name);
    if (mailid != undefined) {
        console.log("Mail id:- " + mailid);
    }
}
//Default parameter with equal signs in func implemenetation
function discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount1 = price * rate;
    console.log("Final discount here for the purchase --> " + discount1);
}
//call the function here
console.log(addNums(10, 5));
details(101, "Rahima");
details(102, "Lari", "ar1278@");
discount(1000);
discount(1000, 0.30);
