let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)

 let myCreatedData = new Date(2025,0,23)
 console.log(myCreatedData.toLocaleDateString())

 let myTimeStamp = Date.now()
 console.log(myTimeStamp)
console.log(myCreatedData.getTime())
 console.log(Math.floor(Date.now()/1000))

 let newDate = new Date()
 console.log(newDate)
 console.log(newDate.getMonth()+1)
 console.log(newDate.getDay())

 newDate.toLocaleDateString('default',{
    weekday: "long"
 })