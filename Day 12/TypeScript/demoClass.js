var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Create class and start transformation of js to TS earlier example
//public //private //protected //readonly
var Person = /** @class */ (function () {
    function Person(a) {
        this.personID = a;
        this.greeting = " Welcome Note ";
        this.refVal = 200;
        console.log("My first TS class object -->");
        console.log("Person is created with person id-->" + this.personID);
    }
    //Creating public method here for the transformation
    Person.prototype.createPerson = function () {
        console.log("Call the public method here");
        return "Person is created with the person id --> " + this.personID + "--with--" + this.greeting;
    };
    Person.prototype.greeetingPerson = function () {
        console.log("Call the private method -->");
        return this.greeting;
    };
    //priviledged by nature javascript use in typeScript
    Person.prototype.testPriviledged = function () {
        console.log("Call the priviledge method -->");
        return this.greeetingPerson();
    };
    return Person;
}());
//here to declare the class Student access protected in its code
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.testChildAccess = function () {
        return "I am a child access the  protected one-->" + this.refVal;
    };
    return Student;
}(Person));
var p = new Person(101);
var s = new Student(102);
console.log("Call the public method here -->" + p.createPerson());
console.log("Access the priviledge method -->" + p.testPriviledged());
console.log("Access the student method here -->" + s.testChildAccess());
