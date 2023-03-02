class BasicCal{
    private botgreet:string;
    public num1:number;
    public num2:number;
    protected num3:number;
    

    constructor(element_1:number,element_2:number)
    {

        this.num1=element_1;
        this.num2=element_2;
        this.num3=0;
        this.botgreet="Hey there ! Happy to help -@Calci developer";

        console.log("First element equals: --> "+this.num1);
        console.log("Second element equals: --> "+this.num2);

    }
    //Accessing private member
    public add():any
    {
        return this.num1+this.num2+" "+this.botgreet;
    }
    public sub():number
    {
        return this.num1-this.num2;
    }
    public mul():number
    {
        return this.num1*this.num2;
    }
    public div():any
    {
        return this.num1+this.num2;
    }

}
class SciCal extends BasicCal{
    
    public sin(n:number):any
    {
        return Math.sin(n);

    }
    
    public cos(n:number):any
    {
        return Math.cos(n);

    }
    //Accessing protected value
    public tan():any
    {
        console.log("I am a child access the  protected value -->"+this.num3);
        return Math.tan(this.num3);

    }
    //Optional parameter used
    public log(n1:any,n2?:number):any
    {
        if (n2 != undefined) {
            
            return Math.log(n1) / Math.log(n2);;
        }
        console.log("Default parameter of base 10 used for taking log");
        return Math.log(n1);
    }

}
console.log("++++++++++++++++++++++++++++++++++++++++++BasicCal is being called++++++++++++++++++++++++++++++++++++++++++");
let b=new BasicCal(33,2);
console.log("Addition of elements -->"+b.add());
console.log("Subtraction of elements -->"+b.sub());
console.log("Multiplication of elements -->"+b.mul());
console.log("Division of elements -->"+b.div());
console.log("++++++++++++++++++++++++++++++++++++++++++SciCal is being called++++++++++++++++++++++++++++++++++++++++++");
let sc=new SciCal(33,54);
console.log("Sin value -->"+sc.sin(1));
console.log("Cos value-->"+sc.cos(0));
console.log("Tan value -->"+sc.tan());
console.log("Log value -->"+sc.log(5,625));
console.log("Log value -->"+sc.log(1));
console.log("Addition of elements -->"+sc.add());