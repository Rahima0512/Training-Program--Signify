//some basic concepts of TSC
console.log("My first TypeScript code");
//Variable & object declaration

let testnum:number=10;
console.log(typeof(testnum));
console.log("Value of numbere here -->"+testnum);

//string

let testString:String="training";
console.log(typeof(testString));
console.log("Value of String here -->"+testString);

//Boolean

let testBoolean:Boolean=false;
console.log(typeof(testBoolean));
console.log("Value of Boolean here -->"+testBoolean);

//one more super data type in typescript used in development
//any

let testAny:any="Hellloooowwww";
console.log(typeof(testAny));
console.log("Value of Any here -->"+testAny);

//now declare the Array in Typescript
let myArray:string[]=["Al","Rahima","Lari"];
console.log(typeof(myArray));
console.log("Value of Array here -->"+myArray);

//now declare the Array of Any in Typescript
let myAnyArray:any[]=["Al","Rahima","Lari","age","is",22];
console.log(typeof(myAnyArray));
console.log("Value of Any Array here -->"+myAnyArray);

//Type of function or method in TS code
//Normal method with return type

function addNums(num1:number,num2:number):number
{
    console.log("Here is the addition method with return type");
    return num1+num2;
}
//call the function here

console.log(addNums(10,5));

//Function with optional parameter represent by ?

function details(id:number,name:string,mailid?:string)
{
    console.log("ID :- "+id);
    console.log(" Name :- "+name);
    if (mailid!=undefined)
    {
        console.log("Mail id:- "+mailid);
    }
}

//Default parameter with equal signs in func implemenetation
function discount(price:number,rate:number=0.50)
{
    let discount1=price*rate;
    console.log("Final discount here for the purchase --> "+discount1);
}
//call the function here

console.log(addNums(10,5));
details(101,"Rahima");
details(102,"Lari","ar1278@");

discount(1000);
discount(1000,0.30);
