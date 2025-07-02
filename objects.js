//singleton

//object literals
const mySym = Symbol('key1')

const jsUser={
    name: "rajaram",
    fullname: 'Rajaram Pati',
    [mySym]: 'mykey1',
    age:20,
    location: "odisha",
    email: "patirajaram@gamil.com",
    isloggedin : false,
    lastloginDays: ['monday', 'tuesday']

}

// console.log(jsUser.email);
// console.log(jsUser['email']);
// console.log(jsUser['fullname']);
// console.log(jsUser[mySym]);

// jsUser.email= "rajaram@g.com"
// Object.freeze(jsUser
// jsUser.email= "rajaram@hsey.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user", this.name);
}

console.log(jsUser.greeting());
//console.log(jsUser.greetingTwo());





