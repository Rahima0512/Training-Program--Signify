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
var BasicCal = /** @class */ (function () {
    function BasicCal(element_1, element_2) {
        this.num1 = element_1;
        this.num2 = element_2;
        this.num3 = 0;
        this.botgreet = "Hey there ! Happy to help -@Calci developer";
        console.log("First element equals: --> " + this.num1);
        console.log("Second element equals: --> " + this.num2);
    }
    BasicCal.prototype.add = function () {
        return this.num1 + this.num2 + " " + this.botgreet;
    };
    BasicCal.prototype.sub = function () {
        return this.num1 - this.num2;
    };
    BasicCal.prototype.mul = function () {
        return this.num1 * this.num2;
    };
    BasicCal.prototype.div = function () {
        return this.num1 + this.num2;
    };
    return BasicCal;
}());
var SciCal = /** @class */ (function (_super) {
    __extends(SciCal, _super);
    function SciCal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SciCal.prototype.sin = function (n) {
        return Math.sin(n);
    };
    SciCal.prototype.cos = function (n) {
        return Math.cos(n);
    };
    //Accessing protected value
    SciCal.prototype.tan = function () {
        console.log("I am a child access the  protected value -->" + this.num3);
        return Math.tan(this.num3);
    };
    //Optional parameter used
    SciCal.prototype.log = function (n1, n2) {
        if (n2 != undefined) {
            return Math.log(n1) / Math.log(n2);
            ;
        }
        console.log("Default parameter of base 10 used for taking log");
        return Math.log(n1);
    };
    return SciCal;
}(BasicCal));
console.log("++++++++++++++++++++++++++++++++++++++++++BasicCal is being called++++++++++++++++++++++++++++++++++++++++++");
var b = new BasicCal(33, 2);
console.log("Addition of elements -->" + b.add());
console.log("Subtraction of elements -->" + b.sub());
console.log("Multiplication of elements -->" + b.mul());
console.log("Division of elements -->" + b.div());
console.log("++++++++++++++++++++++++++++++++++++++++++SciCal is being called++++++++++++++++++++++++++++++++++++++++++");
var sc = new SciCal(33, 54);
console.log("Sin value -->" + sc.sin(1));
console.log("Cos value-->" + sc.cos(0));
console.log("Tan value -->" + sc.tan());
console.log("Log value -->" + sc.log(5, 625));
console.log("Log value -->" + sc.log(1));
console.log("Addition of elements -->" + sc.add());
