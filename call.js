function SetUsername(username){
     this.username = username
     console.log("called");
     
}

function createUser(username,email,password){
    SetUsername.call(this, username)
    this.email =email
    this.password=password
}

const rr = new createUser("rrp","rrp@gmailcom","234"
)
console.log(rr);
