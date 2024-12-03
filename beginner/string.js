let fname = "Rohit"
let lname = "kumarkumarkumar"

console.log(fname.length+" " + lname.length);

// console.log(fname.slice(0,3));
console.log(fname.slice(-3));
console.log(fname.substring(1,4));
console.log(fname.substring(1,4+1));
console.log(fname.substr(1,4));

console.log(lname.replaceAll("kumar","Sahni"));
console.log(fname.toUpperCase());
console.log(fname.toLowerCase());
console.log(fname.concat(" "+lname));

console.log("Madhu".concat(fname));

const randomText = "    madhu        ";
console.log(randomText.trim());

const rand = `Hello world`;
console.log(rand);




