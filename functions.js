 function myName(){
    console.log("rajaram pati");
    
 }

 myName();

//  function addTwoNumbers(num1, num2){
//     console.log(num1+num2);
//  }

//  addTwoNumbers(10,20);

function addTwoNumbers(num1, num2){
   let result = num1+num2
return result

 }

const result = addTwoNumbers(10,20)
console.log(result);

function loginUserMessage(userName){
    if(userName === undefined || userName === null){
        console.log("please enter a valide user name");
        return
    }
    return `user ${userName} is logged in`
}
//  console.log(loginUserMessage("Rajaram"));
console.log(loginUserMessage());

 