const num = [10,1,2,15,30,50,21,22,56];

const even = num.filter((num)=>{
    return num%2 ===0;
});
console.log(even);

const student =[
    {name:"Rohit",age:21},
    {name:"deepak",age:17},
    {name:"sumit",age:22},
    {name:"priya",age:18},
    {name:"suhani",age:16}
]

const fitleredStudent = student.filter((stu,idx)=>{
    console.log(idx);
    return stu.age>=18;
});

console.log(fitleredStudent);


const marks = [
    {subject:"English",marks:83},
    {subject:"Hindi",marks:80},
    {subject:"Math",marks:76}
]

// Method one 

// const result = marks.reduce((totalMarks,sub)=>{
//     return totalMarks + sub.marks;
// },0);


// Method two
function sumAllMarks(totalMark , sub){
    return totalMark + sub.marks;
}

const result = marks.reduce(sumAllMarks,0);

console.log((result/3)+"%");


const cartoon = [
    "schinchan",
    "Doraemon",
    "Spiderman",
    "Batman",
    "Batman",
    "Doraemon",
    "mona",
    "mona",
    "mona"
]
const repeatedCartoons = cartoon.reduce((obj,carton)=>{
    if(!obj[carton]){
        obj[carton]=1;
    }else{
        obj[carton]++;
    }
    return obj;
},{});

console.log(repeatedCartoons);