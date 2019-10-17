// CODE here for your Lambda Classes
class Person {
    constructor (attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak(){return `Hello my name is ${this.name}, I am from ${this.location}.`}
}

class Instructor extends Person{
    constructor (attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo(subject){return `Today we are learning about ${subject}.`}
    grade(student,subject){return `${student.name} receives a perfect score on ${subject}`}
    addGrade(student){
        let gradeAdded = 1 + Math.floor(Math.random()*Math.floor(9));
        student.currentGrade = student.currentGrade + gradeAdded;
        return `${this.name} add ${gradeAdded} to the grade, and ${student.name}'s current grade is ${student.currentGrade}`;
    }
}

class Student extends Person{
    constructor (attributes){
        super(attributes);
        this.previousBackgound = attributes.previousBackgound;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.currentGrade = attributes.currentGrade;
    }

    listSubjects(){return `${this.favSubjects.map()}`}
    PRAssignment(subject){return `${this.name} has submitted a PR for ${subject}.`}
    sprintChallenge(subject){return `${this.name} has begun sprint challenge on ${subject}.`}

    graduate (instructor) {
        for(let i=0; i<(100); i++){
            if(this.currentGrade>=70){
                console.log(`${this.name} is able to graduate and the grade is ${this.currentGrade}.`);
                break;
            }
    
            console.log(instructor.addGrade(this));
        }
    }
    
}

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(channel){return `${this.name} announces to ${channel}, @channel standy times!​​​​​`}
    debugsCode(student,subject){return `${this.name} debugs ${student.name}'s code on ${subject}.`}
}

const aprilDing = new Student({
    name: "April",
    age: "secret",
    location: "Maryland",
    previousBackgound: "HR",
    className: "UX3",
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    currentGrade: 60
});

const christianAllen = new ProjectManager({
    name: "Christian",
    age: "secret",
    location: "Utah",
    specialty: "Front-end",
    favLanguage: "JavaScript",
    catchPhrase: "You will be a good developer.",
    gradClassName: "web16",
    favInstructor: "Nick Basile"
});

const nickBasile = new Instructor({
    name: "Nick",
    age: "secret",
    location: "Texas",
    specialty: "PHP",
    favLanguage: "PHP",
    catchPhrase: "You feel nervous because you care."
});

console.log(nickBasile.demo("JavaScript"));
console.log(christianAllen.debugsCode(aprilDing,"JavaScript"));
console.log(christianAllen.standUp("UX3"));
console.log(aprilDing.PRAssignment("JavaScript"));
console.log(nickBasile.grade(aprilDing,"JavaScript"));

console.log(`------Stretch------`);

aprilDing.graduate(nickBasile);