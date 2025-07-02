// for of 

// ['',"",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr){
console.log(num);

}

const greetings ='hello world'
for (const greet of greetings) {
    console.log(`each character is: ${greet}`);
    
}


//map

const map = new Map()
map.set('IN','India')
map.set("us","united states")
map.set("uk","united kindom")

for (const [key,values] of map) {
    

console.log(key,":-",values);
}

const myObj = {
    'game1': "cricket",
    'game2': 'football'
}
// for (const [key,values ] of myObj) {
//     console.log(key, ";-",values);
    
// }

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    py: 'python'
}

for (const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const coding = ['js', 'cpp', 'rb', 'py']
coding.forEach(function (val){
    console.log(`i love ${val}`);
    
})

coding.forEach((val,index )=>{
    console.log(`i love ${val} at index ${index}`)
})

coding.forEach((val,index,arr)=>{
    console.log(val, index,arr);
    
})

const myCoding = [
    {
        languageName: 'javascript',
        languagetype: 'scripting'
    },
    {
        languageName: 'java',
        languagetype: 'compiled'
    },
    {
        languageName: 'python',
        languagetype: 'scripting'
    }
]

myCoding.forEach((val)=>{
    console.log(`laguage name is ${val.languageName} and type is ${val.languagetype}`);
    
})