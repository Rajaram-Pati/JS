  //Array

  const myArr = [1,2,3,4,5,6]
  const myHeros =['ironman','thor','captain America']

  const myArr2 =new Array(1,2,3,4)
  console.log(myArr[0]);

  //Array Method

  myArr.push(6)
  myArr.push(7)
  myArr.pop()
  console.log(myArr);

  myArr.unshift(9)
  myArr.shift()
  console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));


console.log("a", myArr);

 const myn1 = myArr.slice(1,3)

 console.log(myn1)
 console.log("b", myArr);

 const myn2 = myArr.splice(1,3)
 console.log("c", myArr);
 console.log(myn2);
 
 
 