class Person{
    constructor(name='anonymous',age=0) {
this.name=name;
this.age=age;
    }

    greet() {
        return `Hi! ${this.name}`
    }
}
class Student extends Person {
    
    constructor (name,age,subject) {
        super(name,age);
   this.subject=subject;
    }
    greet() {
        let greetings=`Hi! ${this.name} `;
        if(this.subject) {
            greetings+=`and your are studying ${this.subject}`;
        }
        return greetings;
    }
}

const malkeet=new Student('Malkeet',21,"Java");
const other=new Student();
console.log(malkeet.greet());
console.log(other.greet());