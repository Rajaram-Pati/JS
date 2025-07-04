// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }


// encryptPassowrd(){
//     return `${this.password}abc`
// }
// changeUserName(){
//     return "rrrrr"
// }

// }
// const rr = new User("rrp", "dd@gmail.com", "345")
// console.log(rr.encryptPassowrd())
// console.log(rr.changeUserName());


//behind the scene

function user(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

user.prototype.encryptPassowrd= function(){
    return `${this.password}abc`
}
user.prototype.changeUserName= function(){
    return `${this.username.toUpperClass}abc`
}

const tt = new user("ggp", "ii@gmail.com", "675")
console.log(tt.encryptPassowrd())
console.log(tt.changeUserName());