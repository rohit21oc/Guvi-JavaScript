// lastIndexOf
// indexOf
// search
// match,matchAll

var str = "Hey madhu how are you,actually i want to say something that I know u from third year so I like u"

console.log(str.lastIndexOf("u"));
console.log(str.lastIndexOf("I"));
console.log(str.indexOf("I"));
console.log(str.search("actually"));
console.log(str.match("want"));
console.log(Array.from(str.matchAll("madhu")));


