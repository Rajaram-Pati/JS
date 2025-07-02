// const user = {
//     username: 'rajaram',
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function()  {
//         // console.log('got user details from the database');
//         // console.log(`username: ${this.username}`);
//         // console.log(this);
        
    // }
// }

// console.log(user.username);
// console.log(user.getUserDetails());


// const promiseOne = new Promise()
// const date = new Date()


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("rajaram",19,true)
const userTwo = new User("pati", 32,false)
console.log(userOne);
console.log(userTwo);


 