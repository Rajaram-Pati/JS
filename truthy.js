const userEmail = "raja@gamil.com"

if (userEmail){
    console.log("got user email");
    
}else{
    console.log("user email is not defind");
    
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined,NaN/

// truthy values
// "0", "false", [], {}, function(){}, new Date(), 

if(userEmail.length===0){
    console.log("array is empty");
    
}


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
    
}

// nullish coalescing operator (??): null undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10;
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// ternary operator
// condition ? True : False

const iceTeaPrice =40
iceTeaPrice > 50 ? console.log("ice tea is expensive"): console.log("ice tea is affordable");

