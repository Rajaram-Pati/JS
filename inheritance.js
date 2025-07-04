class User{
    constructor (username){
this.username=username
    }
    logMe(){
        console.log(`username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
    this.email =email
    this.password = password
}

addCourse(){
    console.log(`a new course was added by ${this.username}`);
    
}
}

const rrp=new Teacher("book", "rrrr@g.com", "55400")
rrp.addCourse()