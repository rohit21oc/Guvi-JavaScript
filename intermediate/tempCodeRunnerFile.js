let x = 20;
try{
    if(x%2==0){
        console.log(true);
    }
}catch(err){
    console.log("Error"+err);
}

try {
    x.toPrecision(100);
} catch (error) {
    console.log(error);
    // throw error.name;
    throw "Error: while setting precision to x";
}

let a = 10;
try {
    let sum = a + 10 +b;
    console.log(sum);
    
} catch (error) {
    console.log(error);
    throw error.name
}finally{
    console.log("faild to calculate all");
    
}