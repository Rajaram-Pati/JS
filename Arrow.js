const user = {
    username: "rajaram",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} is welcome to the course at price ${this.price}`);

// console.log(this);

    }
}
// user.welcomeMessage();
// user.username = "raja"
// user.welcomeMessage();/

// console.log(this);/

// function rrr(){
//     let username= "bala"
//     console.log(this.username);
    
// }
// rrr()

const rrr = () =>{
   let username= "bala"
     console.log(this);
    
 }
// rrr()

const addtwo= (num1,num2) =>{

return num1 + num2;

// const addtwo= (num1,num2) => num1 + num2;
// const addtwo= (num1,num2) =>(num1 + num2)
}

console.log(addtwo(5,9));

 




