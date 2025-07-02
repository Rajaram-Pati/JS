// if

const isUserLoggedIn = true;
const temperature = 32;

if (temperature === 40){
console.log("temperature is 40");

}
else{
    console.log("temprature is not 40");
    
}

// <, > , <= , >=, ==, !=, ===, !==

const score =300

if (score > 100){
   let power = "fly"
    console.log(`you have the power to ${power}`);

    }

    const balance = 1000

    // if (balance > 500) console.log("test") ,console.log("test2");
    // not recommended

    if (balance < 500){
        console.log("less than 500");
        
    }
    else if (balance < 750){
        console.log("less than 750");
        
    }else{
        console.log("less than 1200");
        
    }

    const UserLoggedIn = true
    const debitCard = true
    const loggedInFromGoogle = false
    const loggedInFromEmail = true

    if (UserLoggedIn && debitCard){
        console.log("allow to purchase");
        
    }

    if (loggedInFromGoogle || loggedInFromEmail){
        console.log("User logged in");
        
    }
    
    