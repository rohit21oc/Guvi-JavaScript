let salary = 50000;
let name = "Rohit";

if(salary >40000 && name == "Rohit"){
    salary+=10000;
}else if(salary>30000){
    salary+=5000;
}else{
    salary+=2000;
}
console.log(`Salary of ${name} is ${salary}`);

var age = 19;

if(age>=18){
    true;
}else{
    false;
}
if(true){
    console.log("You can drive");
}else{
    console.log("You can't drive");
}

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter a number: ", (input) => {
//     const num = Number(input);

//     if (isNaN(num)) {
//         console.log("Please enter a valid number!");
//     } else if (num % 2 === 0) {
//         console.log(`${num} is an even number`);
//     } else {
//         console.log(`${num} is an odd number`);
//     }

//     rl.close();
// });

const readline = require("readline");

const inp = readline.createInterface({
    input:process.stdin,
    outerHeight:process.stdout
});

inp.question("Enter a number: ",(input)=>{
    const num = Number(input);

    for(let i =2; i<= num.length;i++){
        if(num%i == 0){
            console.log(`${num} is not a prime`);
            
        }else{
            console.log(`${num} is a prime`);
        }
       
    }
    // console.log(isPrime);
    inp.close();
})
