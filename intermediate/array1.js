const cardBrands = ["BMW","Audi","Bugati","Rolls Royal","Toyata"];
cardBrands.forEach((items,idx) => {
    if(items === "BMW"){
        cardBrands[idx] = "Mahindra"
    }
});
console.log(cardBrands);

console.log(cardBrands[4]);
console.log(cardBrands[0]);
console.log(cardBrands[1]);

const fname = new Array("rohit","sumit","deepak");
fname[3] = "Lakshman"
fname[4] = "Lakshman"
const age = new Array(21,21,20);

const mixArayy = new Array(fname,age,["Sheohar","Madhubani","Siwan"]);
console.log(mixArayy);
