const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=> {
    // return num > 4
// })
// console.log(newNums);

// const newNums  = []

// myNums.forEach((num)=>{
//     if (num>4) {
//         newNums.push(num)
        
//     }
// })
// console.log(newNums);


const books =[
    {title: 'book one', genre: 'friction', publish:1981 ,edition: 2004 },
    
    {title: 'book two', genre: 'non-friction', publish:1984 ,edition: 2007 },
    
    {title: 'book three', genre: 'friction', publish:1987 ,edition: 2006 },
    
    {title: 'book four', genre: 'history', publish:1991 ,edition: 2009 },
    
    {title: 'book five', genre: 'science', publish:1995 ,edition: 2003 },
    
    {title: 'book six', genre: 'history', publish:1998 ,edition: 2006 },
    
    {title: 'book seven', genre: 'science', publish:1999 ,edition: 2005 }
    
    
]

let newbooks  = books.filter((book)=> book.genre === 'history')
 newbooks  = books.filter((book)=> {
    return book.publish <= 2000
})
console.log(newbooks);


const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myMappedNumber = myNumber.map((num)=> {
    // return num + 10

// })
const newNums = myNumber
           .map((num)=> num*10)
           .map((num)=> num +1)

console.log(newNums);


    
    