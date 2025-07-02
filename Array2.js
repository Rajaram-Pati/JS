const marvel_Heros=['ironman','thor','spiderman']
const dc_Heros=['superman','flash','batman']

// marvel_Heros.push(dc_Heros)
// console.log(marvel_Heros);

const allHeros= marvel_Heros.concat(dc_Heros)
console.log(allHeros);

const another_array=[1,2,3,[4,5,6],7,[8,9,[7,5]]]

const real_Another_Array=another_array.flat(Infinity)

console.log(real_Another_Array);

console.log(Array.isArray("rajaram"));
console.log(Array.from("rajaram"));
console.log(Array.from({name: "rajaram"}));

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));



