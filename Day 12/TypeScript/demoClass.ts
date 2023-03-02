//Create class and start transformation of js to TS earlier example
//public //private //protected //readonly
class Person{
    public personID:number;
    private greeting:string;
    protected refVal:number;

    constructor(a:number)
    {
        this.personID=a;
        this.greeting=" Welcome Note ";
        this.refVal=200;
        console.log("My first TS class object -->");
        console.log("Person is created with person id-->"+this.personID);
    }
    //Creating public method here for the transformation
    public createPerson():string{
        console.log("Call the public method here");
        return "Person is created with the person id --> "+this.personID+"--with--"+this.greeting;

    }
    private greeetingPerson():string{
        console.log("Call the private method -->");
        return this.greeting;
    }
    //priviledged by nature javascript use in typeScript
    public testPriviledged():string{
        console.log("Call the priviledge method -->");
        return this.greeetingPerson();
    }

}
//here to declare the class Student access protected in its code
class Student extends Person{
    public testChildAccess():string
    {
        return "I am a child access the  protected one-->"+this.refVal;


    }
}

var p=new Person(101);
var s=new Student(102);
console.log("Call the public method here -->"+p.createPerson());
console.log("Access the priviledge method -->"+p.testPriviledged());
console.log("Access the student method here -->"+s.testChildAccess());