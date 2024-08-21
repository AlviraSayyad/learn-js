const marvel_heros=["Ironman","spiderman","Thor","Hulk"]
const dc_heros=["superman","flash","batman"]

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);

//const MCU= marvel_heros.concat(dc_heros);
//console.log(MCU)

const all_hero=[...marvel_heros,...dc_heros]
//console.log(all_hero)

const myarray=[1,2,3,[4,5],[6,7,[8,9]]]
//console.log(myarray.flat(Infinity))

console.log(Array.isArray("Alvira"));
console.log(Array.from("Alvira"))
console.log(Array.from({name:"alvira"}))

const score1=100;
const score2=200;
const score3=300;

console.log(Array.of(score1,score2,score3))
