// immediately invoked function expression

(function myFunction(){
    console.log(`connected`);
    
})();

((name) =>{
console.log(`connected with arrow function ${name}`);

})('rajaram');