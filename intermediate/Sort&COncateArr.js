let fruits = ["Orange","Apple","Kiwi","Mango","Grapes"];
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits)

const axis = [44,12,45,100,100.5,56.5];
console.log(axis);

axis.sort((a,b)=>{
    console.log(a,b,a-b);
    
    // return a-b;//Assending order
    return b-a; // Decending order
});
console.log(axis);

let num1 = [1,2,3,4,5];
let num2 = [6,7,8,9,10];


console.log(num1.concat(num2));

let sum = num1.map((value,index)=>value+num2[index]);
console.log(sum);


