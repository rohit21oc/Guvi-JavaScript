const person = {}
person["fname"] = "Rohit"
person["lname"] = "Kumar"

person.age = 21;
person.gender = "M"
person,city = "Chennai"
person.roll = "WEb developer"
console.log(person);

console.log(person.fname + " work as a " + person.roll);

const p1 = {"fname":"Rohit","lnmae":"kumar"}
const p2 = {"fname":"deepak","lnmae":"kumar"}
const collabPerson = [p1,p2];
console.log(collabPerson);


const school = new Object();
console.log(school);

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = Object.assign({}, obj1, obj2);
console.log(merged); // { a: 1, b: 2 }

// Second video

const student = new Object();
student.name = "Rohit";
student.reg_no = 310521205043;
student.CGPA = 8.3;
student.greet = ()=>{
    return "I appreciate yout talent "+student.name  //We can pass function inside the object
}
console.log(student.greet());

const newStudent = {
    name: "Anam",
    age:21,
    city:"chennai",
    // greet : ()=>{
    //     return this.name + " live in "+ this.city; --->> It will give undefined due to aero function
    // },
    greet : function(){
        return this.name + " live in "+ this.city;
    },
}
console.log(newStudent.greet());


// using function

function employee(fname,lname,age,city,cnumber){
        this.fname = fname,
        this.lname = lname,
        this.age= age,
        this.city = city,
        this.cnumber = cnumber
}

const em1 =new employee("Raunak","Kumar",21,"Patna",7645050131);
console.log(em1);
console.log(em1.fname,em1.age);

