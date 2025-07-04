class user{
    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`username: ${this.username}`);
        
    }

    createId(){
        return`123`
    }
}
const rr= new user("rrrp")
console.log( rr.createId())

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email= email
    }
}

const oo= new Teacher("iam", "yrh@gmail.com")
console.log(oo.createId())