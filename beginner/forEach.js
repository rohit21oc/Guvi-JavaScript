// ForEach
var names = ["rohit","arjun","deepak","sumit"];
names.forEach((items,idx)=>{
    console.log(items,idx);
});

var num = [90,86,99,95,100];
var sum=0;
num.forEach((num,idx)=>{
    console.log(idx, num);
    sum +=num;
});
console.log("Total: "+sum);

// Map
let additionArr = num.map((n)=>n).reduce((acc,curr)=>acc+curr,0);
console.log(additionArr);

