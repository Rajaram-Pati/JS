const myNums = [1,2,3,4,5]

// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc}, currval: ${currval}`);
//     return acc + currval
    
// },0)
//using arrow function
const myTotal = myNums.reduce((acc, currval)=>acc + currval ,0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'js course',
        price: 19990
    },
    {
        itemName: 'py course',
        price: 10000
    },
    {
        itemName: 'java course',
        price: 19000
    }
]

const totalPrice = shoppingCart.reduce((acc, item)=> acc + item.price, 0)
console.log(totalPrice);

