const currentDT = new Date();
console.log(currentDT);
console.log(currentDT.getTime());
var currentTime = currentDT.getTime();
var currentYear = currentDT.getFullYear();
var currentMonth = currentDT.getMonth();
var currentDay = currentDT.getDay();
var currentHours = currentDT.getHours();
var currentSecond = currentDT.getSeconds();
// var currentDate = currentDT.getVarDate();



console.log(currentTime);
console.log(currentYear);
console.log("Month: "+currentMonth);
console.log("day: "+currentDay);
console.log(currentHours);
console.log(currentSecond);
console.log(new Date());

var milisecond = currentDT.getMilliseconds();
var minute = currentDT.getMinutes();
var getTimezone = currentDT.getTimezoneOffset();
var utcDate = currentDT.getUTCDate();
var local = currentDT.toLocaleString();
var localDate = currentDT.toLocaleDateString();

console.log("milisecond: "+milisecond);
console.log("minute: "+minute);
console.log("getTimezone: "+getTimezone);
console.log("utcDate: "+utcDate);
console.log("local: "+local);
console.log("localDate: "+localDate);

// var SomeTime = 1072510318000;

// var decodeSomeTime = new Date(1072510318000);
// console.log("decodeSomeTime: "+decodeSomeTime.getDate());

var sriBday = new Date(1098171118000);
console.log("SriBday: "+sriBday);



