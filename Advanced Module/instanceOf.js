const fruits = ["Mango","Orange","kiwi","Apple","Guava","bitroot"]
const firstName = "Rohit";
const date = new Date();

logger(fruits);
logger(firstName);
logger(date);

function logger(elem){
    console.log(elem);
    console.log(fruits instanceof Object);
    console.log(fruits instanceof Array);
    console.log(fruits instanceof String);
    console.log(fruits instanceof Number);
    console.log(fruits instanceof Boolean);
    console.log(fruits instanceof Date);
    console.log("////////////!");
}

