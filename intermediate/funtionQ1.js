var add = (a, b) => a + b;
var calculate = (x) => {
    return (y) => {
        return add(x, y);
    };
};
var result = calculate(5)(3);
console.log(result);