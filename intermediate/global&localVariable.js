let fullName = "prem";
function p1(){
    fullName = "Rohit kumar"
    let age = 21;
    console.log(fullName,age);
}
// console.log(age);  //--->Error

p1();
function p2(){
    return fullName
}
console.log(p2());

var course = "B.tech"
var city = "chennai"

function num1(number1){
    const result= number1*3;
    function num2() {
        return result *3;
    }
    const response = num2()
    console.log(response);
}

num1(20)
