// SImple Function
function greeting(name){
    console.log(`Hello ${name}`);    
}
let persion1 = greeting("Prem")
console.log(greeting("Rohit"));
console.log(persion1);
console.log(greeting("Madhu"));


// Dynamic function

function isPrime(num){
    if (num <=1)return false;
    for(let i =2;i<num;i++){
        return (num%i===0)?false:true;
    }
}
let num1 = isPrime(1);
console.log(num1);

// Anonimous function
let result = function(marks){
    if(marks>=50){
        console.log("pass");
    }else{
        console.log("fail");
        
    }
}

let student1 = result(45);
console.log(student1);

console.log(result(50));

// Aero function

let fullName = (fname,lname)=>{
    // console.log(fname + " "+ lname);
    return (fname +" "+lname);
}
console.log(fullName("Rohit","Kumar"));

function number1 (n1){
   return function number2(n2) {
        return parseInt(n1) + parseInt(n2);
    }
}
let results = number1(100);
// console.log(results);
let finalresult = results(200);
console.log(finalresult);



