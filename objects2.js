 
 const tinderUser = {}

 tinderUser.name = "john doe";
 tinderUser.age = 30;
 tinderUser.isSingle = true;

//  console.log(tinderUser);

 
// const regularuser = {
//     email: "somthing@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "john",
//             lastname: "doe"
//         }
//     }
// }

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "one", 2: "two", }
const obj2 ={ 3: "three", 4: "four"}

// const obj3 = {obj1,obj2}
// const obj3= Object.assign({}, obj1,obj2);
// the empty array is created to target and all others are act as source
const obj3= {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id:1,
        email:"rrr@gmail.com"
    }
    ,{
        id:2,
        email:"ddd@gmail.com"

    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


